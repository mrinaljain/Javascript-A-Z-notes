/*
You have an inclusive interval [lower, upper] and a sorted array of unique integers arr[], all of which lie within this interval. A number x is considered missing if x is in the range [lower, upper] but not present in arr[]. 
Your task is to return the smallest set of sorted ranges that includes all missing numbers, ensuring no element from arr is within any range, and every missing number is covered exactly once.
*/
//The problem is essentially about finding missing segments in a sorted list within a given range.

let arr1 = [14, 15, 20, 30, 31, 45];
let lower1 = 10;
let upper1 = 50;
let arr2 = [-48, -10, -6, -4, 0, 4, 17];
let lower2 = -54;
let upper2 = 17;

const missingRanges = function (arr, lower, upper) {
  // code here
  let start = lower;
  let end = upper;
  let ans = [];
  for (let index = 0; index < arr.length; index++) {

    if (arr[index] > start) {
      end = arr[index] - 1;
      let set = [start, end];
      ans.push(set);
    }
    start = arr[index] + 1;
  }
  if (start <= upper) {
    ans.push([start, upper]);
  }
  return ans;
};

console.log(missingRanges(arr1, lower1, upper1));
console.log(missingRanges(arr2, lower2, upper2));


/*
missing in start
missing in between
missing in end

handle these 3 cases accordingly
*/
