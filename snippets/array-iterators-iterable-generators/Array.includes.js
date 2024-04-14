// 3. includes
// We often write such judgment statements to do something when one of the conditions is met.

const num = 1
if (num === 1 || num === 2 || num === 3 || num === 4) {
  console.log(num) // 1
}

// In fact, you can simplify the code through the include method.
const nums = [ 1, 2, 3, 4 ]
const num_ = 1
if (nums.includes(num_)) {
  console.log(num_) // 1
}