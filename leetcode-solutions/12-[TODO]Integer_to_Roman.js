// 12 - Integer_to_Roman.js;
/**
 * @param {number} num
 * @return {string}
 */

let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let substractive = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var intToRoman = function (num) {
  if (num == 0) {
    return ans;
  }
  if (num[0] != 4 || num[0] != 9) {
    // max value that can be substracted from num
    Object.entries(roman).findFirst();
    num;
  } else {
    // substractive logic needs to be applied
    num;
  }

  ans += intToRoman(num);
};
