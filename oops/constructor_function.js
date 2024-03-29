

function Dog(objectKaName, objectKiBreed) {
   this.name = objectKaName;
   this.breed = objectKiBreed
};
let kutta = new Dog("lolo", "pomerian");
let newDog = new Dog("lolo", "pomerian");

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
h1.clean();


// console.log(animalDog.name);
// console.log(animalDog.breed);
// console.log(animalDog.type.name);