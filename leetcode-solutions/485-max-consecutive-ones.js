/*
Given a binary array nums, return the maximum number of consecutive 1's in the array. 

*/
let numbers = [1, 1, 0, 1, 1, 1];
let numbers2 = [1, 0, 1, 1, 0, 1];
var findMaxConsecutiveOnes = function (nums) {

   let N = nums.length;
   let currentCount = 0;
   let maxCount = 0;
   for (let i = 0; i < N; i++) {
      const element = nums[i];
      if(element == 1){
         currentCount++;
      } else{
         maxCount = Math.max(maxCount, currentCount);
         currentCount = 0;
      }
   }
   maxCount = Math.max(maxCount, currentCount);
   return maxCount;
};


console.log(findMaxConsecutiveOnes(numbers2));

//? Intution
/*
intution is that consucative 1 ko count krte raho jese hi koi aur value aaye 1 k count ko reset kr do ( pr max ko bhi update kr do ) 
*/
