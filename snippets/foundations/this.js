// Yes I plan on single handedly keeping this keyword knowledge alive!

const user = {
  name: "Tyler",
  age: 32,
  greet() {
    alert(`Hello, my name is ${this.name}`);
  },
  mother: {
    name: "Jan",
    greet() {
      alert(`Hello, my name is ${this.mother.name}`);
    },
  },
};

user.mother.greet();
// When we invoke user.mother.greet, we can tell what the this keyword is referencing by looking to the “left of the dot” of the invocation – in this case, mother.

// So inside of greet, it’s as if we had my name is ${mother.mother.name}, which is clearly wrong. Instead, since the this keyword is referencing mother, we can just do this.name.

const user_ = {
  name: "Tyler",
  age: 32,
  greet() {
    alert(`Hello, my name is ${this.name}`);
  },
  mother: {
    name: "Jan",
    greet() {
      alert(`Hello, my name is ${this.name}`);
    },
  },
};

user_.mother.greet();
