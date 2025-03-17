/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits
*/

var plusOne = function (digits) {

   let carry = false;
  for (let i = digits.length-1; i >=0 ; i--) {

   if(digits[i] !== 9){
      digits[i] = digits[i] + 1;
      carry = false;
      return digits;
   } else{
      carry = true;
       digits[i] = 0;
   }
   
  }
   if(carry){
      digits.unshift(1);
   }
   return digits;
};


let digits1 = [1, 9, 9];
console.log(plusOne(digits1));
  