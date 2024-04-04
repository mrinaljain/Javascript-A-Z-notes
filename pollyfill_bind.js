
let person1 ={
    name : "Monica",
    age: 25,
    profession: 'Waiteress',
    printAge: function(city){
      console.log(this.name + "is " + this.age + " Years old and lives in "+ city);
    }

}

let person2 = {
   name: "Rachel",
   age: 30,
   profession: ' Doctor',
}

// Direct calling
// person1.printAge('manhatan');


//call  
person1.printAge.call(person2 , 'Goa');

//bind

let printRachel = person1.printAge.bind(person2); 
printRachel("Mumbai")

// pollyfill for bind
/// Working of bind
//1. as a prototype mai add hoga function ke
//2. It returns a function which can be executed later
//3. that later execution function is ca;; or apply
//4. jo arguments pass hote hai bind ko usme 0th index pr milta hai naya object
//5. to ban gya formula puranaobject.function.appply(nayaobject, parameters)


Function.prototype.pollyfillBind = function(...args){
   let obj = this;
   let params = args.slice(1);
   return function(...args2){
      obj.apply(args[0], [...params,...args2]);
   }
}

let printRachelAge = person1.printAge.pollyfillBind(person2);

printRachelAge("Indore");