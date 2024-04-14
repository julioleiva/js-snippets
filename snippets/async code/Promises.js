const a = new Promise((resolve) =>{
  const aList = ['a', 'b', 'c', 'd', 'e']
  setTimeout(()=>{
             resolve(aList)
             }, 1200)
})
a.then((a)=>{console.log(a)})

const b = new Promise((resolve, reject) =>{
  const bList = [1, 2, 3, 4, 5, 6]
  if(bList.length){
    setTimeout(()=>{
             resolve(bList)
             }, 300)
  } else{
    reject('Algo fue mal, blotherl')
  }
  
})
b.then((b)=>{console.log(b)})

const c = new Promise((resolve) =>{
  const cList = ['post1', 'post2', 'post3', 'post4']
  setTimeout(()=>{
             resolve(cList)
             }, 500)
})
c.then((c)=>{console.log(c)})

// Promise.all (retorna ARRAY DE ARRAYS)

// el tiempo máximo será el de la promesa que más tarde, no la suma de todas, PORQUE TODAS SE CONSUMEN DE PARALALELAMENTE
// si alguna promesa es rechazada, promise.all() será rechazada con el primer mensaje de fallo.

const all = Promise.all([a,b,c]).then(values => console.log('all',values))

// ---------------------------------------------------

// Promise.allSettled (RETORNA ARRAY DE OBJETOS)

/* cuando consumimos la promesa obtenemos el array de objetos.
cada objeto se carga con dos claves status y value/reason.
status contiene el estado de la promesa (pendiente | cumplida | rechazada), lee más sobre el estado de la promesa aquí.
value contiene el resultado de la promesa. y si la promesa es rechazada por cualquier razón, el mensaje de error devuelto por la promesa se almacenará en la clave reason.
así que si alguna de las promesas es rechazada mientras se consume, Promise.all() mostrará esa promesa en particular como rechazada y otra promesa no se verá afectada por ello.
IMP: esto no bloquea la operación si alguna promesa es rechazada*/


const allSetted = Promise.allSettled([a,b,c]).then(values => console.log('allSettled',values))


// ---------------------------------------------------

// Promise.any(RETORNA una sola promesa, la primera que se ejecute)

/* este método toma un iterable Promise.any([proveedor1, proveedor2, proveedor3]) y devuelve la promesa cuya ejecución se haya completado primero (entre tres proveedores de servicio).
IMP: las promesas rechazadas se ignoran, si el estado de la promesa consumida más rápido es rechazada se ignorará y se devolverá el valor de la siguiente promesa completada con éxito */

const any = Promise.any([a,b,c]).then(values => console.log('any',values))

// ---------------------------------------------------
// Promise.any(RETORNA ARRAY DE OBJETOS)

/* devolverá el valor de la promesa cuya ejecución se haya completado primero (entre tres proveedores de servicios).
IMP: las promesas rechazadas no se ignoran, si el estado de la promesa consumida más rápido es rechazada se ignorará y se devolverá el valor de la siguiente promesa cumplida.
la salida de Promise.race() cuando se cumple la primera promesa devuelta.*/

const race = Promise.race([a,b,c]).then(values => console.log('race', values))
