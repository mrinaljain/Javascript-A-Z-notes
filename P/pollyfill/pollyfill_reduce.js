// Array reduce will reduce the given array to a single value after doing all the calculations given inside function

//Question  Add all numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/// Qusetion Remove duplicates from array
let newNum = [1, 2, 3, 1, 2, 3, 7, 8, 7];

/// make a flattened array
let arr = [1, [2, 3], [4, [5, 6]]];

function addAll(accumulator, currentValue) {
   return accumulator + currentValue;
}

let ans = nums.reduce(addAll, 0);

// console.log(ans);

///! Pollyfill for Arr reduce
//1. takes a callback function and inittial value of aggrigator
//2. callback function takes 4 parama 
//3. accumulator, currentValue, currentIndex, array
//4. recursive function runs where agreegator is updeted everytime to last value 


Array.prototype.myReduce = function (callbackfn, initialValue) {
   let accumulator = initialValue;

   for (const value of this) {
      accumulator = callbackfn(accumulator, value);
   }
   return accumulator;

}

let newAns = nums.myReduce(addAll, 0);
// console.log(newAns);

/// Qusetion Remove duplicates from array
function removeDuplicate(accumulator, currentValue, index, array) {
   for (let i = 0; i < array.length; i++) {
      if (!accumulator.includes(array[i])) {
         accumulator.push(array[i]);
      }
   }
   return accumulator;
}

let filteredArr = newNum.reduce(removeDuplicate, []);

console.log(filteredArr);

///////////////////////////////////////////

/// make flattened array

// let arr = [1, [2, 3], 4, [5, 6]];

// TODO : Using recursion
// loop through every element  also if we find an array on the way  use recursion and same function.
function flat(accumulator, currentValue) {
   if(Array.isArray(currentValue)){
      accumulator.push(...currentValue)
   }else{
      accumulator.push(currentValue);
   }

}

let flattened =  arr.reduce(flat, []);
console.log(flattened);



/// Practice

// takes a function , initial value 
// reduces the array to a singilure value


Array.prototype.testReduce = function (callback, initialValue) {
   let accumulator = initialValue ?? null;
   for (let i = 0; i < this.length; i++) {
      accumulator = callback(this, this[i], i);
      
   }
   
   return accumulator;
}