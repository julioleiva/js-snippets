// How would you add a console.log to this expression?

/* const mappedNames_ = names.map(name => ({ 
  name, 
  company: "uidotdev"
}));*/

const names = ["Ben", "Alex", "Lynn", "Tyler"]; 

/* You could rewrite the function to use a block body, but ain’t nobody got time for that. Because console.log returns undefined we can use the logical OR operator (||) to add the log inline */

const mappedNames_ = names.map(name => ({ 
  name, 
  company: "uidotdev"
}));

const mappedNames = names.map(name => console.log(name) || ({ 
  name, 
  company: "uidotdev"
}));