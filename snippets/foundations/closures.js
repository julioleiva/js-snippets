/*

https://javascript.plainenglish.io/javascript-closure-the-secret-handshake-of-functions-2713736dca35

¿Qué son los CLOSURES en JavaScript?
Piense en un closure como una función con una identidad secreta. Es una función que puede recordar su pasado y mantenerlo en secreto incluso después de que su función externa haya completado su misión. En términos más sencillos, es una forma de preservar el estado de una función incluso después de que haya terminado su trabajo.

¿Dónde utilizar CLOSURES en JavaScript?
Se utilizan principalmente para crear clases orientadas a objetos, manejar eventos como un jefe, y gestionar operaciones asíncronas con facilidad.

¿Cuándo utilizar CLOSURES en JavaScript?
Cuando quieras preservar el estado de una función después de que haya completado su misión. Es especialmente útil cuando se trata de operaciones asíncronas, como eventos o temporizadores, para que pueda mantener el estado y asegurarse de que todo está bajo control.

¿Cómo utilizar CLOSURES en JavaScript?
Sólo tienes que definir una función dentro de otra función, devolver la función interna, y ¡boom! Ya tienes un closure. La función interna tendrá acceso a los secretos de su ámbito externo.

*/

function outerFunction(){
  let counter = 0
  
  function inner(){
    return counter++
  }
  
  return inner
}

let closure = outerFunction();

/* closure()
closure()
closure() */

/* Lexical Scoping and Closures
El (Lexical Scoping) alcance léxico es como un mapa para las variables en JavaScript. Nos ayuda a entender que las variables tienen como ámbito la función más cercana que las encierra. Así, cualquier función interna tiene acceso a los secretos de su ámbito externo. */

function myModule(){
  let privateMethod = function(){
    console.log('from private method',secret)
  }
  
  let secret = 123
  
  return {
    privateMethod: function(){
      privateMethod()
    },
    secret // para tener acceso a esta variable hay que retornarla
  }
}

let module = myModule();
module.privateMethod()
module.secret // accedo a secret porque la estoy retornado























