import { createMachine, assign, interpret } from 'xstate';


const fetchMachine = createMachine({
 predictableActionArguments: true,
  id: 'fetch',
  initial: 'idle',
  context: {
    data: null,
    error: null
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading'
      }
    },
    loading: {
      invoke: {
        src: async (context, event) => {
          try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            return data;
          } catch (error) {
            throw error;
          }
        },
        onDone: {
          target: 'success',
          actions: assign({
            data: (context, event) => event.data,
            error: (context, event) => null
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            data: (context, event) => null,
            error: (context, event) => event.data
          })
        }
      }
    },
    success: {
      on: {
        FETCH: 'loading'
      }
    },
    failure: {
      on: {
        FETCH: 'loading'
      }
    }
  }
});

// Crear una instancia del servicio de la máquina
const fetchService = interpret(fetchMachine)
  .onTransition((state) => {
    if (state.matches('idle')) {
      console.log('La máquina está en estado idle');
    } else if (state.matches('loading')) {
      console.log('La máquina está en estado loading');
    } else if (state.matches('success')) {
      console.log('La máquina está en estado success');
      console.log('Datos:', state.context.data);
    } else if (state.matches('failure')) {
      console.log('La máquina está en estado failure');
      console.log('Error:', state.context.error);
    }
  })
  .start();

// Enviar un evento FETCH para iniciar la solicitud
fetchService.send('FETCH');
