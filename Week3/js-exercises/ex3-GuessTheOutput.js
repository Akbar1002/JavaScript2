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


Output should be 12, because of the function scope can influnce global scope. 
in the function scope the value of a is redefined.