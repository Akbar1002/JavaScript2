/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// In the first case the result is 9, but in the f1 funtion it returns 10.
// when we console log outside function scope. we couldn't able to get inside value.
in other words we have value in function scope. but we call it in glabal scope.

In the second function we get 10, because for objects there are sane context.



