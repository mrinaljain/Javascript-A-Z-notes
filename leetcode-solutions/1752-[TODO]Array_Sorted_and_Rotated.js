/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isSorted(arr) {
   for (let i = 1; i < arr.length; i++) {
     if (arr[i - 1] > arr[i]) {
       return false;
     }
   }
   return true;
 }
var check = function (nums) {
  // external loop for x
  // internal loop on nums array
  // create B for every index

  let n = nums.length;
//   let sorted = nums.toSorted();
  let B = [];
  for (let x = 0; x <= n; x++) {
    for (let i = 0; i < nums.length; i++) {
      B[i] = nums[(i + x) % n];
    }
    // compare if that is sorted if not continue loop
    if (isSorted(B)){
      console.log(B);  
      return true
    }
      
  }
  return false;
};

nums1 = [3, 4, 5, 1, 2];
nums2 = [2, 1, 3, 4];
nums3 = [1,2, 3,];
 console.log(check(nums1))
 console.log(check(nums2))
 console.log(check(nums3))


 // TODO: lool for O(N) time complaxity solution
 //https://www.youtube.com/watch?time_continue=556&v=Vzs_vlCIFEw&embeds_referring_euri=https%3A%2F%2Fleetcode.com%2F