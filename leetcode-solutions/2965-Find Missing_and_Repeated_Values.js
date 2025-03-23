/*
You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
*/
let grid1 = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];

let grid2 = [
  [1, 3],
  [2, 2],
];
var findMissingAndRepeatedValues = function (grid) {

   let r = grid.length;
   let c = grid[0].length;


   let hashMap = {};
   let ans = [];
   // outer loop for rows
   for (let i = 0; i < r; i++) {
      // inner loop for columns
      for (let j = 0; j < c; j++) {
         const element = grid[i][j];
         
         if(hashMap[element]){
            hashMap[element] = hashMap[element] +1;
         }else{
            hashMap[element] = 1; 
         }  
         if (hashMap[element] == 2) {
           ans[0] = element;
         }
      }
      
   }

   for (let i = 1; i <= r*r; i++) {
      if(!hashMap[i]){
         ans[1] = i;
      }
   }

   return ans;
};

console.log(findMissingAndRepeatedValues(grid1));
console.log(findMissingAndRepeatedValues(grid2));


// need to optimise space complexity