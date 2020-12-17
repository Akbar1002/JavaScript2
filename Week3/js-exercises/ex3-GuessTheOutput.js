/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*Output should be 12, because in the function scope the value of "a" was redefined.
function scope can influnce to global scope.
alert(a) is a child scope of function() so it has access to the it is  parent (function)scope.
*/
