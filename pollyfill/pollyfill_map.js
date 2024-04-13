// add methods for those browsers where they are not available inside prototype


//! 1. pollyfill for map on array
//map accepts a callback function
//apply  function to every value
// create new arra and return new array
Array.prototype.newMap = function (callbackFn) {
   let newArr = [];
   for (let i = 0; i < this.length; i++) {
      let result = callbackFn(i, this[i], this);
      newArr.push(result);
   }
   return newArr;
}


function double(index, currentvalue, arr) {
   return currentvalue * 2;
}
function triple(index, currentvalue, arr) {
   return currentvalue * 3;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let doub = numbers.map(double);
console.log(doub);

let trip = numbers.newMap(triple);
console.log(trip);
