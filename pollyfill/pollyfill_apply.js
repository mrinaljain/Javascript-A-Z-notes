// call  usually changes the current calling context 
// we need to trya nd do that on our own

const student1 = {
   name: "Soham",
   age: 22,
   printName: function (age = student1.age) {
      console.log(`${this.name} is ${age} years old!`);
   }
}

const student2 = {
   name: "Shreya",
   age: 24,
}

// student1.printName.apply(student2, [student2.age]);
if (!Function.prototype.apply) {
   Function.prototype.apply = function (...args) {
      let oldContext = this;
      let newContext = args[0];
      let params = args[1];
      // console.log(params);
      this.call(newContext, params);
   }
}
student1.printName.apply(student2, [99]);



