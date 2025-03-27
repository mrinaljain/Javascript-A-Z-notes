/*
You are given an m x n integer matrix grid.

We define an hourglass as a part of the matrix with the following form:


Return the maximum sum of the elements of an hourglass.

Note that an hourglass cannot be rotated and must be entirely contained within the matrix.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid1 = [
  [6, 2, 1, 3],
  [4, 2, 1, 5],
  [9, 2, 8, 7],
  [4, 1, 2, 9],
];

var maxSum = function(grid) {
   let rows = grid.length;
   // print all center points first
   let centerPoints = rows - 2;

   for (let i = 1; i <= centerPoints; i++) {
      for (let j = 1; j <= centerPoints; j++) {
         const element = grid[i][j];
         console.log(i, j); // all center points 

         // for every center point find  hourglass sum
         //upper sum
         for (let k = 0; k < 3; k++) {
            const element = array[k];
            
         }
         // current element
         // below sum
      }
   }
};

maxSum(grid1);