/*
Una "copia profunda" de un objeto es una copia cuyas propiedades no comparten las mismas referencias que las del objeto fuente del que se hizo la copia. Un enfoque para la copia profunda en JavaScript es utilizar JSON.stringify y JSON.parse.

Esto funciona en este caso, pero el resultado será convertido en una cadena. Para evitarlo, podemos utilizar window.structuredClone(si el navegador lo soporta).
*/

const profile = {
  rol: 'Developer',
  area: 'Front',
  experience: new Date(),
  skills:['Js', 'css', 'html'],
  resume:{
    positions:[
      {
        company:'C&A',
        start:new Date(),
        end:new Date()
      }
    ]
  }
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const copiedProfile = deepCopy(profile)
console.log(copiedProfile)



function deepStrCloneCopy(obj) {
  return window.structuredClone(obj)
}

const copiedStrCloneProfile = deepStrCloneCopy(profile)

const copiedDeepProfile = deepCopy(profile)
console.log(copiedDeepProfile)

