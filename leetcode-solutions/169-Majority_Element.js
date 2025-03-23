/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
let nums1 = [2, 2, 1, 1,1,1, 1,1, 2, 2,3];
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  let majorityElem = nums[0]; 
  let count = 1;
//   let ans = 0;
  for (let i = 0; i < nums.length -1; i++) {
   let element = nums[i];
   let nextElement = nums[i+1];
   if(element === nextElement){
      count++;
   }else{
      if(count > (nums.length/2)){
        majorityElem = element; 
      }
      count = 1;  
   }
  }
  if (count > nums.length / 2) {
    majorityElem = nums[nums.length-1];
  }
  return majorityElem;
};



// console.log(majorityElement(nums1));


// Solution 1 => O(NlogN)
/*
sort the array 
now iterate through the array maintaining count of unique element
and update the unsew if count is > then N/2.
*/


// ============================================================


let majorityElementNew = function(nums) {
 
   let hashMap = {};
   
   let n = nums.length;

   for (let i = 0; i < nums.length; i++) {
      const element = nums[i];

      if (hashMap[element]) {
        // increase the frequency
      //   console.log("Yaha aaya", hashMap[element]);

        hashMap[element] = hashMap[element] + 1;
      } else {
        // add new element with 1 frequency
        hashMap[element] = 1;
      }
      
      if( hashMap[element] > n/2){
         return element;
      }
   }
   
 
}

console.log(majorityElementNew(nums1));

// Solution2 => O(N)

/*
save frequency of each element
as soon as you find a frequency above n/2 
return the answer directly*/