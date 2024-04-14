const writers = [
  'Carver',
  null,
  'Vila-Matas',
  undefined,
  'Rulfo',
  NaN,
  'Banville',
  1,
  false,
  "",
  0,
  "Foster Wallace",
  0n,
]

const filteredWriters = writers.filter(Boolean)
console.log(filteredWriters)