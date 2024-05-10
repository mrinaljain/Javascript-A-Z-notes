// call  usually changes the current calling context 
// we need to trya nd do that on our own

const student1 = {
   name: "Soham",
   age : 22,
   printName: function (){
      console.log(this.name);
   }
}

const student2 = {
   name: "Shreya",
   age: 24,
}


// student1.printName.call(student2);

Function.prototype.myCall = function (...args) {
   let oldContext = this;
   let newContext = args[0];
   let params = args.splice(1);
   console.log(params);
   this.apply(newContext, [params]);

}
student1.printName.myCall(student2, 2,3);