// This one was for the beginners.

function safeUpdate_(obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    obj.key = value;
  }
}

// Our bug is that we’re adding a literal key property to our object.
const user = {
  name: "Alice",
  age: 30
};

safeUpdate_(user, "country", "USA"); //

user // { name: 'Alice', age: 30, key: 'USA' }


/*In JavaScript, if you want to use a variable as the key of an object, you need to use bracket notation instead of dot notation.*/

function safeUpdate(obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    obj[key] = value;
  }
}

safeUpdate(user, "country", "USA");

user /* {
  name: 'Alice',
  age: 30,
  key: 'USA',
  country: 'USA'
}*/
