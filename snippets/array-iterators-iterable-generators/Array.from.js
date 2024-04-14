// From the method, we can convert array-like objects, arguments objects, and NodeList objects into real arrays through Array.from() the method.

// Array-like object

const arrayLike = {
  0: "fatfish",
  1: "medium",
  length: 2,
};
// 🧟
const array1 = [].slice.call(arrayLike);

console.log("🧟", array1);

// A more convenient way
const array2 = Array.from(arrayLike);

console.log("💥", array1);

// 2. NodeList

const domsNodeList = document.querySelectorAll("div");
const domsArray = Array.from(domsNodeList); // [ dom, dom, dom, ... ]

// 3. Arguments

const logInfo = function () {
  console.log("arguments", arguments);
  console.log("Array.from arguments", Array.from(arguments));
};

logInfo("fatfish", 100, [{ name: "Julio" }]);
logInfo("fatfish", 343, [{ name: "Julio" }]);
