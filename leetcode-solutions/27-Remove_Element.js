/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*/
let nums1 = [0, 1, 2, 2, 3, 0, 4, 2];
let val1 = 2;
let nums2 = [3, 2, 2, 3];;
let val2 = 3;

var removeElement = function (nums, val) {

   let n = nums.length;
   let k = n-1;

   for (let i = n-1; i>=0; i--) {
      
      if(nums[i] == val){
         // swipe i , k
         let temp = nums[i];
         nums[i] = nums[k];
         nums[k] = temp;
         // update k
         k--;
      }
   }
   console.log(nums);
   return k+1;


};

console.log(removeElement(nums1, val1));
console.log(removeElement(nums2, val2));
