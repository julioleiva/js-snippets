// Aliasing destructured variables

/* But, what if we want to alias the variables to something else? For example, we want to alias the name variable to fullName and the age variable to userAge.
Here’s what we can do */

const User = {
    name: 'John Doe',
    age: 30
};

const { name: fullName, age: userAge } = User;

console.log(fullName); // John Doe
console.log(userAge); // 30


/*As you can tell, we can alias the variables by using the : operator. So, we can alias the name variable to fullName and the age variable to userAge.*/

