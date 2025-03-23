let str = "MCMXCIV";

let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  // run a loop on every character

  let n = s.length;
  var sum = 0;
  for (let i = 0; i < n; i++) {
     let charValue = roman[s[i]];
     let nextCharValue = roman[s[i + 1]] || 0;

    if (charValue < nextCharValue) {
      sum -= charValue;
    } else {
      sum += charValue;
    }
  }

  return sum;
};

romanToInt(str);


// Solution

/* Intution: we need to observe that ultimately its a addition , substraction on numbers associated with the Roman letters.*/