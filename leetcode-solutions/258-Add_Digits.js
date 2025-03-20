/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/
let n1 = 123;

function addDigits (num) {

   // terminating step
   if(num < 10){
      return num;
   }

   // smallest individual step
   let sum = 0;
   let strNum = num.toString();
   for (let i = 0; i < strNum.length; i++) {
     sum += parseInt(strNum[i]);
   }

   return addDigits(sum);

};

console.log(addDigits(n1));


/* Intution is to use Recursion using terminating stem and smallest single step method taught by Manisha in scaler*/