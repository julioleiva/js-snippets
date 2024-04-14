// Array.of
// About the weird Array function:

// As we all know, we can do the following things through the Array function.


// 1. Initialize an array of the specified length
const array1 = Array(3) // [ , , ]
// 2. Set the initial value of the array
const array2 = Array() // []
const array3 = Array(undefined) // [ undefined ]
const array4 = Array(1, 2, 3) // [ 1, 2, 3 ]

array1
array2
array3
array4

// The number of parameters passed to the Array function is not the same, and its function is not the same. This often confuses me.

// Fortunately, we can use Array.of to make up for the shortcomings of Array.


// it's not initializing an array of length 3
const arrayOf1 = Array.of(3) // [ 3 ]
const arrayOf2 = Array.of() // []
const arrayOf3 = Array.of(undefined) // [ undefined ]
const arrayOf4 = Array.of(1, 2, 3) // [ 1, 2, 3 ]

arrayOf1
arrayOf2
arrayOf3



