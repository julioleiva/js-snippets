/*Nested loops aren’t ideal, but sometimes they’re unavoidable. Given the nested loop below, how can we break out of the nested loop when j === 2?*/

function loop () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 2) {
        // Break out here
      }
    }
  }
}


/*It’s rarely used, but in JavaScript you can use a labeled statement to add a label to a for loop. This then allows you to break and interrupt the loop when needed – even from inside another loop.*/

function loop_ () {
  dance:
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 2) {
        break dance;
      }
    }
  }
}