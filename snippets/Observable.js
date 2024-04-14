"use strict"
const observers = [];
const Observable =  Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

Observable.subscribe(logger);





