

var a = [1,2,3];
var b = [1,2,3];
var c = a; // c mai a ka address stored hai

// console.log(a == b);  // true
// console.log(a === b); // true
// console.log(a == c);  // true

// c --> a

console.log([] == []); // false because both array have diffrend address

console.log([] == 0); //true as empty array converts to 0

console.log([] == false); 
console.log({} == false);
console.log({} == true);
console.log([] == false);