/*Una copia profunda de un objeto es una copia cuyas propiedades no comparten las mismas referencias que las del objeto fuente del que se hizo la copia. Un enfoque para la copia profunda en JavaScript es utilizar JSON.stringify y JSON.parse.

Esto funciona en nuestro caso, pero convertirá lo creado en una cadena. Para evitarlo, puede utilizar window.structuredClone en su lugar (suponiendo que el navegador lo soporte).*/


function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

const user = {
  name: 'Tyler',
  age: 32,
  created: new Date()
}

const copiedUser = deepCopy(user)

function deepStructuredCopy(obj) {
  return window.structuredClone(obj)
}

const deepCopiedUser = deepStructuredCopy(user)

{copiedUser}