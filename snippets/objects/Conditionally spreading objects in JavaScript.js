const isActive = true;

const user = {
  name: "Amit",
  age: 30
};

const activeUsers = {
  ...isActive && user
};

console.log(activeUsers);
