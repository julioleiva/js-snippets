// If you’re like me, you use one of these strategies for logging a value to the console.

const name = 'Tyler'

console.log('name', name) // name Tyler
console.log('HERE', name) // HERE Tyler
console.log('sefkjse', name) // sefkjse Tyler
console.log('wakawaka', name) // wakawaka Tyler

// Believe it or not, there’s a better way and it utilizes object destructuring.

console.log({ name }) // {name: 'Tyler'}