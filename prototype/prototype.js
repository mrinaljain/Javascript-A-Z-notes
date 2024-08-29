// Below we will  implement same inheritance as (__proto__) using prototype

function Foo(y, x) {
  this.y = y;
  this.x = x;
}

Foo.prototype.calaulate = function (z) {
  console.log(+this.x + this.y + z);
};
Foo.prototype.x = 10;

let a = new Foo(20, 50);

let b = new Foo(10, 50);
// internally proto of b will be pointed to the prototype of Foo constructor function in order to inheritence to work
// b.__proto__ = Foo.prototype
// i.e. b.calculate = Foo.prototype.calculate

// console.log(b);
// a.calaulate(40);

// Foo.prototype.calaulate(20);  //! not possible as its constructor function

// Question
// creating prototype object on Array
Array.prototype.double = function double(...args) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    this[i] *= 2;
  }
};

let nee = [1, 2, 3, 4, 5, 6, 7, 8];
nee.double();
console.log(nee);
