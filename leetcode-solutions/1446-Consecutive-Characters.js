/*
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.
*/
let str = "abbcccddddeeeeedcba";
let str1 = "leetcode";
var maxPower = function (s) {
   let n = s.length;
   let currentCount = 1;
   let ans = '';
   let maxCount = 0;
   for (let i = 0; i < n-1; i++) {
      const character = s.charAt(i);
      const nextCharacter = s.charAt(i+1);
      
      if(character == nextCharacter){
         currentCount++;
      } else{
         maxCount = Math.max(currentCount,maxCount);
         currentCount = 1;
      }

   }
   maxCount = Math.max(currentCount, maxCount);
   return maxCount;
};


console.log(maxPower(str));
console.log(maxPower(str1));

// Intution

// keep compairing  current char to next and increase the count
// also update maxpoeer by maxof both
