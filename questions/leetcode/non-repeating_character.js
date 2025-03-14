/*
Given a string s of lowercase English letters, the task is to find the first non-repeating character. If there is no such character, return ‘$’.

Input: s = “geeksforgeeks”
Output: ‘f’
Explanation: ‘f’ is the first character in the string which does not repeat.
 */

const nonRepeating = function (s) {
  let length = s.length;
  let ans = "$";
  //outer loop for picking character
  for (let index = 0; index < length; index++) {
    let ch = s[index];
    let found = false;
    // inner loop for comparision
    for (let j = 0; j < length; j++) {
      if (index != j && ch === s[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      ans = ch;
      break;
    }
  }
  return ans;
};

let ans = nonRepeating("aabbccc");
console.log(ans);
