// Sorts inplace
// returns Same sorted Array  (use toSorted if need new array)
const nums = [5, 2, 9, 23, 5, 34, 76, 23, 4, 56];

nums.sort((a, b) => a - b);

console.log(nums);


//? Comparator Function ka logic
/*
 - comparator function jo value return krta hia uske base pr order decide hota hai.
 - negative value => a pehle phir b
 - positive value => b pehle phir a
*/