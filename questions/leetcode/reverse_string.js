var reverseStr = function (s, k) {
  let inputArray = s.split("");
  for (let i = 0; i <= inputArray.length; i = i + 2 * k) {
    let temp = inputArray[i];
    inputArray[i] = inputArray[i + 1];
    inputArray[i + 1] = temp;
  }

  return inputArray.join("");
};


let ans = reverseStr("abcdef", 3);

console.log(ans);
