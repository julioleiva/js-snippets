// De MDN: "El método findIndex() devuelve el índice del primer elemento de la matriz que satisface la función de comprobación proporcionada. De lo contrario, devuelve -1, indicando que ningún elemento pasó la prueba".

const array = [ -1, 0, 10, 10,10,  20, 100 ]
const index1 = array.findIndex((num) => num < 0) // 0
const index2 = array.findIndex((num) => num >= 10) // 2
const index3 = array.findIndex((num) => num === 3) // -1

index1
index2
index3