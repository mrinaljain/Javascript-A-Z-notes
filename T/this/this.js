// 'use strict';


// console.error('STRICT MODE ON');
//! this in the global space
/// this in global space points to the globalObject of the Javascript Rntime Environment 
/// i.e  [windows] in case of chrome browser
console.log('Global Space');
console.log(this);


//! this inside function 
//! this in strict mode
/// this inside a function depends on the mode [strict , non strict] of the javascript in which its running
/// strict mode ON  -->  undefined
/// strict mode OFF -->  window
/// On top of strict mode the value of this also depends on the object reffrence through which  the function invocation happens
/// window.fun();  --> winndow

function a() {
   // let b = 10;
   console.log(this);
}
console.log('Inside Function Without object refrence');
a();
console.log('Inside Function With object refrence');
window.a();


//! this inside object's method
/// this inside object's method [method should not be an arrow function] points to the object itself
let animal = {
   breedName: 'ABC',
   age: 26,
   sound: 'woff',
   makeSound: function () {
      console.log(this);
   }
}
console.log('this inside object\'s method[method should not be an arrow function]points to the object itself');
animal.makeSound();


//! this inside arrow function
/// this inside the arrow function points to the enclosing lexical scope
console.log('this inside the arrow function points to the  this of enclosing lexical scope');
(() => console.log(this))();


//! this inside arrow function inside object
let anotherAnimal = {
   breedName: 'ABC',
   age: 26,
   sound: 'woff',
   makeSound: () => console.log(this),
   // test: this
   // test2:console.log(this)
}
console.log('this inside the Objects\'s arrow function points to the enclosing lexical scope');
anotherAnimal.makeSound();
console.log(anotherAnimal.this);
// console.log(anotherAnimal.this2);
//! this inside nested arrow function

let yetAnotherAnimal = {
   breedName: 'ABC',
   age: 26,
   sound: 'woff',
   makeSound: function() {
      (() => console.log(this))();
   }
}
console.log('this inside the Objects\'s NESTED arrow function points to the parent\s this reffrence');
yetAnotherAnimal.makeSound();

// this inside DOM
// current node


// this keyword inside class 


// this keyword inside constructors


let student = {
   name :"mohan",
   printName : function(city){
      console.log(`My Name is ${this.name} and I am from ${city}`);
   },
   printThis : function(){
      console.log(this);
   }
}

let student2 = {
   name: "Rohan"
}

student.printName.call(student2, 'Delhi');
student.printName.apply(student2, ['Delhi']);
let prinStudentName = student.printName.bind(student2);
prinStudentName("Raamnagar");
//experiment below
student.printThis.call(this);

