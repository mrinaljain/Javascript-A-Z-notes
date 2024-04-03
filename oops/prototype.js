///*  inheretince between objects normally using proto
// let a = {
//    x: 10,
//    y: 30,
//    calculate: function (z) {
//       console.log(this.x + this.y + z);
//    },
// }

// let b = {
//    y: 20,
//    __proto__: a
// }

// var c = {
//    y: 40,
//    temp: 111,
//    __proto__: b
// }
///*  inheretince between objects normally using proto


///! bellow we will  implement same inheritance as above using prototype
function Foo(y, x) {
   this.y = y;
   this.x = x;
   console.log(this);
}


// adding new key using prototype hence new keys will be available for further objects to inherit
// PROTOTYPE is an object that is available in constructor function. Prototype provides you with a way to inherit things in JS and the inheritance is known as [prototypical Inheritance]

Foo.prototype.calaulate = function (z) {
   console.log(+ this.x + this.y + z);
}
Foo.prototype.x = 10
let a = new Foo(20 , 50);


let b = new Foo(10 , 50);
// internally proto of b will be pointed to the prototype of Foo constructor function in order to inheritence to work
// b.__proto__ = Foo.prototype
// i.e. b.calculate = Foo.prototype.calculate 


console.log(b);
a.calaulate(40);

// Foo.prototype.calaulate(20);  //! not possible as its constructor function


// Question
// creating prototype object on Array 
Array.prototype.double = function double(...args) {
   for (let i = 0; i < this.length; i++) {
    const element = this[i];
     this[i] *= 2;    
   }
}

let nee = [1,2,3,4,5,6,7,8];
nee.double();
console.log(nee);