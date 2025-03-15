var reverseWords = function (s) {
  // remove extra space around
  let clearString = s.trim();
  // now reverse the array
  let stringArray = clearString.split(" ").reverse();
  console.log(stringArray);
  let finalArray = stringArray.filter((item) => item != "");
  let ans = finalArray.join(" ");
  return ans;
};

let ans = reverseWords("a good   example");

console.log(ans);
