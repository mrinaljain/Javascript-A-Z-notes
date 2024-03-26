// __proto__ is used to share context betweeb 2 objects

let a ={
   x:10,
   y:30,
   calculate: function(z){
      console.log(this.x + this.y + z);
   }
}

let b = {
 y: 20,
 __proto__: a
}

let c = {
y:40
}

b.calculate(50);