// ----------1---------------

const array = [1, 2, 3, 4, 5, 6];

const logArrItems = (array) => {
    for (var i = 0; i < array.length; i++) {
    console.log(arr[i]);
  }
};

// ----------2---------------

const reverse = (str) => {
  return [...str].reverse().join("");
};

// ----------3---------------

const a = "a";
const b = "b";
const c = "1";
const d = "2";
const e = 1;
const f = 2;
const g = {
  a,
  b,
};
const h = {
  a,
  b,
};

const i = g;

const j = {
  i,
};

console.log(b === "b"); // true

console.log(c == e); // true

console.log(g == h); // false

console.log(g === h); // false

console.log(i == g); // true

console.log(j.i === g); // true

// ----------4---------------

const unique = (arr) => {
  return [...new Set(arr)];
};

// ----------5---------------

const map = (arr, cb) => {
  const newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
};

// ----------6---------------

console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeout"); // 5
}, 0);

Promise.resolve()

  .then(function () {
    console.log("promise1"); // 3
  })

  .then(function () {
    console.log("promise2"); // 4
  });

console.log("script end..."); // 2

// ----------7---------------

(function () {
  console.log("why do this?");
})();

function foo() {
  var a = 2;
  b = 3;
}

foo();

console.log(a); // ReferenceError: a is not defined

console.log(b); // 3

console.log(window.a); // undefined

console.log(window.b); // 3
