

function Dog(objectKaName, objectKiBreed) {
   let _name = objectKaName; // Private variable
   this.getName = function () { // Public method to access the private variable
      return _name;
   };
      this.breed = objectKiBreed;
      function barkinside() {
         console.log("bhow bhow bhow inside constructor");
      }
      this.barkinside = barkinside;
};
let kutta = new Dog("lolo", "pomerian");
let newDog = new Dog("lolo", "pomerian");

kutta.name = "New Name";
kutta.barkinside = 5;
kutta.barkoutside =10;

console.log(kutta.name);
console.log(kutta.barkinside);
console.log(kutta.barkoutside);

function HouseKeeper(name, yoe, cleaningRepertoire) {
   this.name = name;
   this.yoe = yoe;
   this.cleaningRepertoire = cleaningRepertoire;
   this.clean = function () {
      alert("Cleaning in Progress..");
   }

   // need to learn use of below code?
   function clean2() {
      alert("Cleaning in Progress 2..");
   }

}


let h1 = new HouseKeeper('halwa', 6, ['a', 'b', 'c']);
// h1.clean();


// console.log(animalDog.name);
// console.log(animalDog.breed);
// console.log(animalDog.type.name);

