/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/
let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {

   let currentUniqueElement = nums[0];
   let currentUniqueCount = 1;
   for (let i = 1; i < nums.length; i++) {
         let currentElement = nums[i];
      if(currentElement !== currentUniqueElement){
         currentUniqueElement = nums[i];
         // swipe the element 
         let temp = nums[i];
         nums[i] = nums[currentUniqueCount];
         nums[currentUniqueCount] = temp;
         currentUniqueCount++;
      }
   }
   
   console.log(nums);
   return currentUniqueCount;
   
};


console.log(removeDuplicates(nums1));


/*
TWO Pointer Approach
1 L pointer to keep track of the index  till which unique elements are
2 R pointer to traverse the array
At every step we will keep track of current unique element, if we find new element then we will sawp with the currant L. 
*/
// https://www.youtube.com/watch?v=DEJAZBq0FDA