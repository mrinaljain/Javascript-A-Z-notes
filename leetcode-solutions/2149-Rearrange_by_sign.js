/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions
*/
let nums1 = [3, 1, -2, -5, 2, -4];
let nums2 = [-1, 1];
let nums3 = [
  28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31
];

var rearrangeArray = function (nums) {

   //seperate positive and negative in diff arrays
   //push oneby one in new array
   let pos = [ ];
   let neg = [ ];
   let ans = [ ];
   for (let index = 0; index < nums.length; index++) {
      let element = nums[index];
      if(element < 0){
         neg.push(element)
      }else if(element>= 0){
         pos.push(element)
      }
   }
   console.log("pos", pos);
   console.log("neg", neg);
   
   let posLength = pos.length;
   let negLength = neg.length;

   let minLength = Math.min(posLength, negLength);

   for (let i = 0; i < minLength; i++) {
     ans.push(pos[i]);
     ans.push(neg[i]);
   }

   return ans;
};


// console.log(rearrangeArray(nums1));
// console.log(rearrangeArray(nums2));
console.log(rearrangeArray(nums3));


/*
seperate positive and negative in diff arrays
push oneby one in new array 
*/