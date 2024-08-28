//! Using Closure
function add(x) {
  return function (y) {
    return x + y;
  };
}
// console.log(add(5)(4));

// ========================================

//! Using bind

function addition(x, y) {
  return x + y;
}

let addBy5 = addition.bind(this, 5);
let addBy10 = addition.bind(this, 10);

console.log(addBy5(10));

console.log(addBy10(20));
