/*
Given an array arr[] of size n and an integer k, the task is to insert a duplicate of k adjacent to its every occurrence. Keep array’s original length same by removing the elements from the back.
*/

let arr1 = [1,0,2,3,0,4,5,0]
let k1 = 0;
const insertK = function (array, k){

   // run loop
   // if element == k 
   // => pop last element and insert at current index
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(element == k){
         array.pop();
         array.splice(index, 0,k);
         index++; // this is to skip the k inserted , to avoid error
      }

   }

   return array;
}

console.log(insertK(arr1, k1));

