class Singleton {
  constructor() {
   // already instance hai to vahi return kar do 
     if (Singleton._instance) {
       return Singleton._instance; 
     }
     // common prop across all the objects created
    this.count = 0;
    // instance nhi hai to instance k value current object set krdo .
   Singleton._instance = this;

   // agar constructor mai return statemant nhi likha hai to vo current object(Singleton) return kr dega
  }

  increaseCount() {
    this.count++;
    console.log("Count:", this.count);
  }
}

let p1 = new Singleton();
let p2 = new Singleton();


p1.increaseCount();
p2.increaseCount();
