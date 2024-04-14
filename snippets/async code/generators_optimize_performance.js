/* How to return multiple values from a function in JavaScript

In JavaScript, you can return multiple values from a function using an array. For example, you can do something like this.*/

const getValues = () => {
    // Do some calculations
    const someValue = 'someValue';

    // Do some other calculations
    const otherValue = 'otherValue';

    return [someValue, otherValue];
};

const allValues = getValues();

console.log(allValues); 


/*As you can see, the getValues() function returns an array with two values that you can access using the allValues variable.

To make it sweeter, you can destructure the array to get the values.*/

const getValues_ = () => {
    const someValue = 'someValue';
    const otherValue = 'otherValue';

    return [someValue, otherValue];
};

const [someValue, otherValue] = getValues_();
console.log(someValue);
console.log(otherValue);

/*The good thing about this is you don’t have to keep the name of the variables the same as the values returned from the function. You can name them whatever you want.

So, the following would work equally well*/

const [a, b] = getValues();

console.log(a); // someValue
console.log(b); // otherValue

/*A real-world example
You might have seen this pattern being used in React. For instance, the useState() hook returns an array with two values like so.*/

const [isActive, setIsActive] = useState(false);

/*As you can tell, the first value here is the state and the second value is the function to update the state */