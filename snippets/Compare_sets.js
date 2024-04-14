const setA = new Set([
  {
    id: 1,
    name: "Cereal", 
    category: "food"
  },
  {
    id: 2,
    name: "Shampoo", 
    category: "grocery"
  },
  {
    id: 3,
    name: "Fruit jam", 
    category: "food"
  }
]);

const setB = new Set([
  {
    id: 1,
    name: "Cereal", 
    category: "food"
  },
  {
    id: 2,
    name: "Shampoo", 
    category: "grocery"
  },
  {
    id: 3,
    name: "Fruit jam", 
    category: "food"
  }
]);

const setsEquality = (as, bs) => {
  if (as.size !== bs.size) {
    return false;
  }
  for (const a of as) {
    if (!bs.has(a)) {
      return false;
    }
  }
  return true;
}

console.log(setsEquality(setA, setB));