/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
   if(s.length){}
  let arr = s.match(new RegExp(/[a-z0-9]/g));
   
  if(arr === null){
   return true;
  }
  let ans = arr.join("");
  

  let n = ans.length;
  let middle = n / 2;

  if (middle % 2 === 0) {
    var right = middle - 1;
    var left = middle;
  } else {
    right = Math.ceil(middle);
    left = Math.floor(middle) - 1;
  }
  console.log("right", right);
  console.log("left", left);

  while (right <= n - 1 && left >= 0) {
    console.log(ans[right]);
    console.log(ans[left]);

    if (ans[right] !== ans[left]) {
      return false;
    }

    right++;
    left--;
  }

  return true;
};
let str = "A man, a plan, a canal: Panama";
let str1 = "race a car";
let str2 = " ";
//  console.log(isPalindrome(str));
//  console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

// Intution
// pehle safai kr lo puri string ki
// now loop on the remaining string from center
// ek bhi gadbadi mili to false
// end mai true


// ?  Follow-up: (google level)
// Find minimum number of deletions required to convert a string into a palindrome.