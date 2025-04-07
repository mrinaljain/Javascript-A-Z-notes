/*
Two strings are called k-anagrams if both of the below conditions are true.
1. Both have same number of characters.
2. Two strings can become anagram by changing at most k characters in a string.

Given two strings of lowercase alphabets and an integer value k, the task is to find if two strings are k-anagrams of each other or not.
*/
let s1 = "fodr";
let s2 = "gork";
let k = 2;

let s3 = "geeks";
let s4 = "eggkf";
let l = 1;

let s5 = "cbbdeccea";
let s6 = "edbcddebb";
let m = 5;
const areKAnagrams = function (s1, s2, k) {
  let changesRequired = 0;
  // run a loop on first string and check if char exixts in other string
  if(s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    const character = s1[i];
    let s2Index = s2.indexOf(character);
    if (s2Index !== -1) {
      // if yes then remove that char from other string

      // ! (more time taking) s2 = s2.slice(0, s2Index) + s2.slice(s2Index + 1);
      s2 = s2.substring(0, s2Index) + s2.substring(s2Index + 1, s2.length);
 
    } else {
      // if no then update the count
      changesRequired++;
    }
  }
  // final result is the count if it is equal to k

  if (changesRequired <= k) {
    return true;
  }

  return false;
};

console.log(areKAnagrams(s1, s2, k));
console.log(areKAnagrams(s3, s4, l));
console.log(areKAnagrams(s5, s6, m));



// TODO: need to understand more optimal approach using maps 