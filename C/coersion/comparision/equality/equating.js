// double equals ignores type checking and does  type coersion before comparision

// tripple equal will do strict type checking without coersion

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a; // c mai a ka address stored hai

console.log(a == b); // false [dono k address ko compare karega]
console.log(a === b); // false [dono k address ko compare karega]
console.log(a == c); // true  [dono k address ko compare karega]

// EXAMPLE with empty array
const emptyArray = [];
const anotherEmptyArray = [];
console.log(emptyArray == anotherEmptyArray); // false [both array have diffrent address ]

console.log(emptyArray == 0); // True [empty array is a Falsy value which will be converted to 0 in type coersion]

console.log(emptyArray === 0); // false [since there is tripple equal so there will be no type coersion and arrayis not equal to 0]

console.log(emptyArray == false); // true []
console.log(emptyArray == true); // false []

// Example with Objects
console.log("%cExamples with Objects!", "color:red");

const emptyObject = {}; // this will not be treated as empty object but a  empty code block
const anotherEmptyObject = {};
const filledObject = { one: 1, two: 2, three: 3 };

console.log(emptyObject == anotherEmptyObject); // false [ address compare karega]
console.log(emptyObject === anotherEmptyObject); // false [ address compare karega]

console.log(emptyObject == false); // false
console.log(emptyObject == true); // false
console.log(emptyObject == false); // true

console.log(emptyObject.valueOf());
console.log(emptyObject.toString());
