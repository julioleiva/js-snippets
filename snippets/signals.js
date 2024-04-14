import Signal from 'signals';

// Crear el signal
let apiErrorSignal = new Signal();

// Escuchar el signal
apiErrorSignal.add(function(error) {
  console.error("Ocurrió un error al conectar con la API: ", error);
});

// También podrías tener un componente de interfaz de usuario escuchando el signal
apiErrorSignal.add(function(error) {
  showErrorDialog("Ocurrió un error al conectar con la API. Por favor, intenta de nuevo más tarde.");
});

// Emitir el signal
function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      let user = data.results[0];
       console.log({user})
      // Realizar algo con los datos del usuario
    })
    .catch(error => {
      apiErrorSignal.dispatch(error);  // Emitir el signal cuando hay un error
    });
}

// Otra petición a la API que también emite el signal en caso de error
function fetchAnotherUser() {
  fetch('https://randomuser.me/api/?gender=female')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      let user2 = data.results[0];
      console.log({user2})
      // Realizar algo con los datos del usuario
    })
    .catch(error => {
      apiErrorSignal.dispatch(error);  // Emitir el signal cuando hay un error
    });
}

fetchUser()
fetchAnotherUser()
