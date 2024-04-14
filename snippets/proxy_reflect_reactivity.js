let target = {a:1};
let handler = {
  get: function(target, prop, receiver) {
    console.log(prop)
    console.log(...arguments)
    console.log(`Property "${prop}" was requested.`);
    return Reflect.get(...arguments);
  }
};

let proxy = new Proxy(target, handler);
proxy.foo; // Logs: Property "foo" was requested.
proxy.a
