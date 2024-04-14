function* generatorFn(){
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFn()

// generator.next()
// generator.next()
// generator.next()
// generator.next()

// for(let value of generator){
//   console.log(value)
// }

// for...of loop automatically calls the generator's next() method on each iteration. The generator function is paused at each yield keyword, and the value of the yield expression is returned to the loop.

let result = generator.next()
while(!result.done) {
  console.log(result.value)
  result = generator.next()
}