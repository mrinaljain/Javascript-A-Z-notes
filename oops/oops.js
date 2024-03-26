
class Animal {
   constructor(type,name, breed) {
      this.type = type
      this.name = name;
      this.breed = breed;
   }
};
class Dog {
   constructor(name, breed) {
      this.name = name;
      this.breed = breed;
   }
};
let kutta = new Dog("lolo" , "pomerian");

let animalDog = new Animal(kutta, "animalNaam" ,
 "animalBreed");


// function Dog(objectKaName,objectKiBreed){
//    this.name = objectKaName;
//    this.breed = objectKiBreed
// };



// let newDog = new Dog("lolo" , "pomerian");


console.log(animalDog.name);
console.log(animalDog.breed);
console.log(animalDog.type.name);