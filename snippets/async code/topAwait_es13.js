// Utilizar "await" en el nivel superior de un módulo
// de mdn: El operador await se utiliza para esperar una Promise y obtener su valor de cumplimiento.

const getUserInfo = () => {
  return new Promise((rs) => {
    setTimeout(() => {
      rs({
        nombre: 'Jupi'
      })
    }, 2000)
  })
}

// Si quieres usar await, debes usar la función async.
const fetch = async () => {
  const userInfo = await getUserInfo()
  console.log('userInfo', userInfo)
}

fetch()

// SyntaxError: await sólo es válido en funciones asíncronas
const userInfo = await getUserInfo()
console.log('userInfo_', userInfo)

// De hecho, después de ES13, podemos usar await en el nivel superior de un módulo, lo que es una novedad realmente feliz para los desarrolladores. Es genial.

const getUserInfoES13 = () => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({
    nombre: 'JupiES13'
   })
  }, 2000)
 })
}

const userInfoES13 = await getUserInfoES13()

console.log('userInfoES13', userInfoES13)
