/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map();

  let ans = "";

  for (let i = 0; i < s.length; i++) {
    let elementS = s[i];
    let elementT = t[i];
    // check if item already exists in map
    if (map.has(elementS)) {
      // if yes => then add value corresponding to it in ans
      ans += map.get(elementS);
    } else {
      // if no => add[same index] it to map => then add value to string
      if ([...map.values()].includes(elementT)) {
         return false;
      }
      map.set(elementS, elementT);
      ans+= elementT;
    }
  }
  console.log(ans);
  
  if(ans === t) return true;

  return false;
  
};

let s1 = "paper";
let t1 = "title";
let s2 = "foo";
let t2 = "bar";
let s3 = "egg";
let t3 = "add";
let s4 = "badc";
let t4 = "baba";

// console.log(isIsomorphic(s1, t1));
// console.log(isIsomorphic(s2, t2));
// console.log(isIsomorphic(s3, t3));
console.log(isIsomorphic(s4, t4));
 


// intution

/* question says ki humko ekk string se dusti string bana k dekhna hai ki ban rhi hai k nhi
given ki hum second string k elements ko first string k elements se replacce krte jaye.

ek condition hai ki ek character ko ek value assign ho gy to vahi use hogi.


iske liye we will use a map

agar map mai value hai to usko use karenge 
agar nhi hai to new use karenge 

final jo string banegi usko second string se compare karenge for answer
*/