// Use the “at method” to read the tail element of an array
// How do you read the tail element of the array? Yes, we need to read with “array.length-1” as a subscript.
const array = [ 1, 2, 3, 4, 5 ]
const lastEle = array[ array.length - 1 ] // 5
console.log(lastEle)

// 🧟 You can't read like that
// const lastEle = array[ - 1 ] // undefined

// Is there any other way?

// Yes, the “at” method will be your magic. Of course, you can read elements elsewhere in the array.

const array_ = [ 1, 2, 3, 4, 5 ]
const lastEle_ = array_.at(-1)
const ele1_ = array_.at(0)

console.log(lastEle_)
console.log(ele1_)


