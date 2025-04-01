/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

let str = "((";
var isValid = function (s) {
  let n = s.length;
  let stack = [];
   if (n % 2 !== 0 || n===1) {
     return false;
   }
  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      // compare withthe last element to check pair 
      console.log("current bracket", bracket);
      console.log("last bracket", stack[stack.length - 1]);
      

      if (
        (bracket === "]" && stack[stack.length - 1] === "[") ||
        (bracket === ")" && stack[stack.length - 1] === "(") ||
        (bracket === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if(stack.length > 0){
   return false;
  }
  return true;
};

console.log(isValid(str));


// Intution
/*har opening k liye ek closing bracket hoga
1. Use a stack of characters.
2. When you encounter an opening bracket, push it to the top of the stack.
3. When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.
*/