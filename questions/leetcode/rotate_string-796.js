/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
*/

var rotateString = function (s, goal) {
   let length = s.length;
// shift and compare 
for (let i = 0; i < length; i++) {
   let shiftedString = shift(s , i);
   if(shiftedString === goal){
      return true;
   }
}
return false;
};

function shift(str , times){
   for (let j = 1; j <= times; j++) {
     let strArr = str.split("");
     let temp = strArr[0];
     let arrLength = strArr.length;
     // shift 1
     for (let i = 0; i < arrLength - 1; i++) {
       strArr[i] = strArr[i + 1];
     }
     strArr[arrLength - 1] = temp;
     str = strArr.join("");
   }
   return str;
}

let ans = rotateString("abcde", "abced");

console.log(ans);


/*
Intuition
The key insight is that when you concatenate a string with itself (s + s), it contains all possible rotations of the original string.

For example, if s = "abcde", then s + s = "abcdeabcde" contains all rotations: "abcde", "bcdea", "cdeab", "deabc", "eabcd".
*/

