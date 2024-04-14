// https://ui.dev/this-keyword-call-apply-bind-javascript

const car = {
  name: 'Tesla',
  startEngine() {
    console.log(`The ${this.name} engine is starting...`);
  },
  delayedStart() {
    setTimeout(this.startEngine, 1000);
  }
};

car.delayedStart();

/*The bug has to do with our invocation of startEngine. Because we’re passing this.startEngine as an argument to setTimeout, we’re not the ones invoking it. That means it’s not going to get invoked with the correct context (this). We can fix this in two ways – either using .bind (🙃) or invoking the function ourself like this.*/

const car2 = {
  name: 'Tesla',
  startEngine() {
    console.log(`The ${this.name} engine is starting...`);
  },
  delayedStart() {
    setTimeout(() => this.startEngine(), 1000);
  }
};

/*If you’d like a longer explanation, we break it down in Understanding the “this” keyword, call, apply, and bind in JavaScript.*/