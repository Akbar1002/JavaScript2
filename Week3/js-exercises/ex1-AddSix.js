/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(num) {
  // Put here your logic...
  return function addNine() {
    num = num + 9;
    return num;
  };
}

const addNine = createBase(6);

// Put here your function calls...

createBase(addNine());
createBase(addNine());
createBase(addNine());
