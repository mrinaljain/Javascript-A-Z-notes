// Array
let a1 = [1,2,3,4,5,6,7];
console.log(a1);


// Empty Array of length 2
let a2 = new Array(2);
console.log(a2);


// Array with values  [constructor] 
let a3 = new Array(1,2,3,4,5);
console.log(a3);

// Array with list
let a4 =  Array.of(1,2,3,4,5,6,7);
console.log(a4);



// Array from any iterable
let s1 = new Set([1,2,3,4,5,6]);
let a5 = Array.from(s1);

console.log(a5);


// Array from expanded version

const a6 = Array.from(s1, (x) => x * 2); // doubled values
console.log(a6);


const a8 = Array.from({ length: 5 }, (_, i) => i+1); // [1, 2, 3, 4, 5]
console.log(a8);


// using fill method to fill values
const a7 =  new Array(8).fill(3);
console.log(a7);




