const arr = [
  {
    key: "11",
    value: "1100",
  },
  {
    key: "22",
    value: "2200",
  },
];

const object = arr.reduce((obj, item) => ({
  ...obj,
  [item.key]: item.value
}), {})

console.log('with reduce', object)

const mapped = arr.map(item =>({
  [item.key] : item.value
}))

const objectWithMap = Object.assign({}, ...mapped)

console.log('with map', objectWithMap)