/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
nums = [1,2,3,4,5,6,7], k = 3

*/
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1= 3;
var rotate = function (nums, k) {

    let reverse = nums.reverse();

    let partOne = reverse.slice(0,k).reverse();
    let partTwo = reverse.slice(k).reverse();
   nums = [...partOne ,...partTwo];
      //  nums.splice(0, k, ...partOne);
      //  nums.splice(k, n - k, ...partTwo);
   console.log(nums);
   
};


rotate([1, 2, 3, 4, 5, 6, 7], k = 3);

// intution 
/*  
Aarray rotate krna hai to simply 
reverse entire array
then reverse 2 sub array [0 - k] [k - end]
*/

// https://www.youtube.com/watch?v=BHr381Guz3Y