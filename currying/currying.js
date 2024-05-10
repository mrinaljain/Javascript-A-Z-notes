// Currying bassicaly means to convert a function which wtakes multiple arguments 
// into a seriese of functions which takes single arguments untill we reach the solution



//! Using Closure
function add(x) {
   return function (y) {
      return x + y;
   }
}
// console.log(add(5)(4));

// ========================================

//! Using bind

function addition(x , y){
   return x+y;
}

let addBy5 = addition.bind(this,5);

console.log(addBy5(10));