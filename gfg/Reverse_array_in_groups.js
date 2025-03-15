/*
Given an array arr of positive integers. Reverse every sub-array group of size k.

Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. You shouldn't return any array, modify the given array in place.
arr[] = [1, 2, 3, 4, 5], k = 3
*/

let arr1 = [1, 2, 3, 4, 5];
let k1 = 3;

let arr2 = [
  13, 36, 93, 64, 48, 96, 55, 70, 0, 82, 30, 16, 22,
  38, 53, 19, 50, 91, 43, 70, 88, 10, 57, 14, 94, 13,
  36, 59, 32, 54, 58, 18, 82, 67,
];
let k2 = 13;
function reverseInGroups(arr, k) {
  // code here
  let n = arr.length;
  let start = 0;
  while (start < n) {
    let reverse = arr.slice(start, start + k).reverse();
    arr.splice(start, k, ...reverse);
    start = start + k;
  }
  
  console.log(arr);
}

//  reverseInGroups(arr1, k1)
reverseInGroups(arr2, k2);


// intution
//  there are 2 things to tackle one is reverse and second is to insert
// so we will use slice  -> reverse -> splice to do it via inbuilt methods


//? another way using 2 pointers
/*
let n = arr.length;
  
  for (let i = 0; i < n; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1); // Ensure we don't go out of bounds
    
    // Reverse elements in the current group
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
      left++;
      right--;
    }
  }
*/