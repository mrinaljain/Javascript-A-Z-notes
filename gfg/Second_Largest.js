/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.
*/
let arr1 = [12, 35, 1, 10, 34, 1];
let arr2 = [10, 5, 10];
let arr3 = [10, 10, 10];

let getSecondLargest = (arr) => {
  // Code Here
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    max = Math.max(max, currentElement);
  }

  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > secondMax && element != max) {
      secondMax = element;
    }
  }
  if (secondMax === 0) return -1;
  return secondMax;
};

console.log(getSecondLargest(arr1));
console.log(getSecondLargest(arr2));
console.log(getSecondLargest(arr3));
