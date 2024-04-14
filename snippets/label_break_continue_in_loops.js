for (let i = 0; i < 10; i++) {
  // End the loop when we get to a multiple of 3
  if (i % 3 === 0) {
    break
  }
  console.log(i)
}
// 1, 2

// These two statements work great for individual loops, but what if we needed to coordinate nested loops? If we just used break or continue inside the inner loop, it wouldn’t be able to stop or skip the outer loop.

const numberList = [1, 2, 3, 4, 5]
for (let i = 0; i < numberList.length; i++) {
  const iNum = numberList[i]
  for (let j = 0; j < numberList.length; j++) {
    const jNum = numberList[j]
    if ((iNum * jNum) % 2 === 0) {
      // This continues the inner loop if the number is even
      continue
    }
    console.log(iNum * jNum)
  }
}
// 1,3,5,3,9,15,5,15,25

// To let us call continue or break on the outer loop from inside the inner loop, we need to apply a label to the outer loop. The label goes right before the for statement. Then, we can use the label with the continue statement. Notice how the results change once we add the label.

const numberList2 = [1, 2, 3, 4, 5]
outerLoop: for (let i = 0; i < numberList2.length; i++) {
  const iNum = numberList2[i]
  for (let j = 0; j < numberList2.length; j++) {
    const jNum = numberList2[j]
    if ((iNum * jNum) % 2 === 0) {
      // This continues the inner loop if the number is even
      continue outerLoop
    }
    console.log(iNum * jNum)
  }
}
// 1,3,5
// Next time you need to nest loops for some reason, you can use a label, break, and continue to have more control over the flow of your loops.