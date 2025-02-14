"use strict";

// var a = 10;

// function call() {
//    console.log(a);
//    let a = 20;
// }

// call();

// var y = 1,
//    x = y = typeof x
// console.log(x);

// var b = 1;

// function outer() {
//    var b = 2
//    function inner() {
//       var b;
//       b++;
//       var b = 3;
//       console.log(b)
//    }
//    inner();
// }

// outer();

var x = 3;
var y = x++;
y += 1;

console.log(hoistedVar); // undefined
var hoistedVar = 5;

test = 15;
var test = 10;

console.log(test);

let mohan = new Person("mohan", "delhi", 22, "M");

class Person {
  constructor(name, city, age, gender) {
    name = this.name;
    city = this.city;
    age = this.age;
    gender = this.gender;
  }
}

console.log(mohan.name);
