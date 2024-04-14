const products = [
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
];

const hasGrocery = products.some(function(product) {
  return product.category === 'grocery';
})

console.log(hasGrocery);
