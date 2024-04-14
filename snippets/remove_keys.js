
const myObj = {
  a: 1,
  b: 2,
  c: 3,
  // ...
};

const removeKey = (key, obj) => {
  const {[key]: ommitted, ...rest } = obj;
  return rest
}

console.log(removeKey("a", myObj)) // { b: 2, c: 3 }