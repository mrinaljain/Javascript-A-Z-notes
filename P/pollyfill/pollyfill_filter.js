let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



function isEven(currentValue ,index, arr){
   if(currentValue % 2 == 0){
      return true;
   }
   return false;
}
let newArr = nums.filter(isEven);

console.log(newArr);

//! pollyfill for filter
//1. takes a function 
//2. function has 3 parameter  -> currentvalue, index, orignalarray
//3. function returns true/false based on the condition inside
//4. of true add to the new array , if false then ignore



Array.prototype.myFilter = function(callback){
   let result=[];

   for (const value of this) {
      if(callback(value)){
         result.push(value);
      }
   }
   return result;

}

let myFilterAns = nums.myFilter(isEven);

console.log(myFilterAns);

// Practice

// filter takes  a callback function
// returnes a new array
// based upon a condition which is inside callback  function

Array.prototype.testfilter = function(callback){
   let ans = [];

   for (let i = 0; i < this.length; i++) {
      if(callback(this, i, this[i]) === true){
         ans.push(this[i]);
      }
   }
   if(ans.length> 0){
      return ans;
   }else{
      return [];
   }
}