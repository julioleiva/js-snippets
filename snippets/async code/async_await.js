

/*When you return a non-Promise value inside an async function, the value is wrapped inside a Promise before being returned*


One thing to keep in mind is that starting an asynchronous operation and awaiting its result are two separate actions. This becomes clear when you write them on different lines. */

async function getFive() {
  return 5;
}

getFive()

/* A non-async function that returns a promise is also asynchronous. The following code is practically the same as the one above:*/

function giveFive(){
  return Promise.resolve(5)
}

giveFive()