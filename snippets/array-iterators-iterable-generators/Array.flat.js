// From MDN: “The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.”

const array = [ 1, [ 2, [ 3, [ 4, [ 5 ] ] ] ] ]
 
// The default depth is 1
const flat1 = array.flat() // [ 1, 2, [ 3, [ 4, [ 5 ] ] ] ]
const flat2 = array.flat(2) // [ 1, 2, 3, [ 4, [ 5 ] ] ]
const flatAll = array.flat(Infinity) // [ 1, 2, 3, 4, 5 ]

flat1
flat2
flatAll