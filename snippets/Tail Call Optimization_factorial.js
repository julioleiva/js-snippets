// La optimización de llamadas de cola es una técnica de optimización de funciones recursivas que permite llamarlas sin aumentar la pila de llamadas. Esto puede evitar errores de desbordamiento de pila y mejorar el rendimiento de las funciones recursivas.

function factorial(n, accumulator = 1) {
 if (n === 0) {  
  return accumulator
 }

 return factorial(n - 1, n * accumulator)
}

console.log(factorial(5)) // 120
console.log(factorial(1000)) // Infinity

// En este ejemplo, definimos una función factorial que calcula recursivamente el factorial de un número. Utilizamos una variable acumuladora para llevar la cuenta del producto actual de los factores, y lo pasamos como parámetro a la llamada recursiva. Esto permite que la función sea optimizada por el motor de JavaScript utilizando la optimización de llamadas de cola.