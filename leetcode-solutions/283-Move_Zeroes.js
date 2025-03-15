/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
let nums = [0, 1, 0, 3, 12];

function shift(startIndex, endIndex){
   for (let i = startIndex; i <= endIndex; i++) {
     nums[startIndex - 1] = nums[startIndex];
   }
}
var moveZeroes = function (nums) {

   let n = nums.length;
   let one = 1;
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] == 0) {
       shift( one, n);
       console.log(nums);
       nums[n] = 0;
       n--;
       one++;
     }
   }
   // console.log(nums);
   

};

moveZeroes(nums);

// two pointers