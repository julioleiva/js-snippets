const friends = ['Alex', 'Ben', 'Lynn']
friends.hasOwnProperty('push') // false

/*As mentioned earlier, if you look at Array.prototype, it doesn’t have a hasOwnProperty method. How then, does the friends array have access to hasOwnProperty?

The reason is because the Array class extends the Object class. So when the JavaScript interpreter sees that friends doesn’t have a hasOwnProperty property, it checks if Array.prototype does. When Array.prototype doesn’t, it checks if Object.prototype does, it does, then it invokes it.*/

const friends_ = ['Alex', 'Ben', 'Lynn']

console.log(Object.prototype)
/*
   constructor: ƒ Object()
   hasOwnProperty: ƒ hasOwnProperty()
   isPrototypeOf: ƒ isPrototypeOf()
   propertyIsEnumerable: ƒ propertyIsEnumerable()
   toLocaleString: ƒ toLocaleString()
   toString: ƒ toString()
   valueOf: ƒ valueOf()
*/

friends_ instanceof Array // true
friends_ instanceof Object // true

friends.hasOwnProperty('push') // false