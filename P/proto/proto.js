//! Inheritance between objects 
// __proto__
// is used to share context betweeb 2 objects

let a = {
   x: 10,
   y:30,
   calculate: function (z) {
      console.log(this.x + this.y + z);
   },
   //! for proto chain
   // __proto__:c
}

let b = {
  y: 20,
  x: 20,
  __proto__: a,
};

var c = {
  y: 40,
  temp: 111,
  __proto__: b,
};

// console.log(c);
// b.calculate(50)
c.calculate(50);

//? Question
// Can we add __proto : c  inside object a to create a proto loop