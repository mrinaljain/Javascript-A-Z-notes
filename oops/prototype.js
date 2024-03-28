function Foo(y) {
   this.y = y;
}


// adding new key using prototype hence new keys will be available for further objects to inherit
Foo.prototype.x = 10
Foo.prototype.calaulate = function (z) {
   console.log( + this.x + this.y + z);
}

let a = new Foo(20);
let b = new Foo(30);

a.calaulate(40);