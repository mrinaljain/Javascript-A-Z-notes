// Static Methods in javascript classes are to make the methods/variables only belong to the classes itself 
//  no other object instance can call the static method/variable  other then the class itself 

//! STATIC Keyword jisko bhi assign hota hai , CLASS uski owner ban jati hai. means Class hi call kr sakti hai usko . 
class Animal {
   constructor(name , breed , color){
      this.name = name;
      this.breed = breed;
      this.color = color;
   }
   // STATIC variable
   static extraWord = "Halwa"; 

   // printname is public method( available to all the object instances)
   printName (){
      console.log(`${Animal.upper(this.name)} is a ${this.breed} of ${this.color} color who likes to eat ${this.extraWord}`);
   }

   // STATIC Method (available only to the class and not to object instances of class)
   static upper (word){
      return word.toUpperCase();
   }

   



}

let cat = new Animal("Suni", "cat" , "black");

cat.printName();

// Static method can only be called by CLASS
// console.log(Animal.upper("billi"));