/* 7.# Rounding Trick
 To give back to the consumers, today our store is doing a promotion where all the food is discounted and the decimals are wiped out, I need to use Math.floor to calculate the final price of the food 

Well, is there an easier way? How about ~~? */

const foods = [
  {
    name: '🍔',
    price: 30.89
  },
  {
    name: '🍨',
    price: 20.71
  },
  {
    name: '🍿',
    price: 10.31
  },
]
const discountedFoods = foods.map((it) => {
  return {
    name: it.name,
    price: ~~it.price
  }
})

console.log(discountedFoods)