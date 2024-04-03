// ES 6 introduced concept of  classes which is same as the constructor functions , just a syntactical sugar 

class Dog {
   constructor(objectKaName, objectKiBreed) {
      this._name = objectKaName;
      this.breed = objectKiBreed;
      function barkinside() {
         console.log("bhow bhow bhow inside constructor");
      }
      this._barkinside = barkinside;
   }
   get name() {
      return this._name;
   }
    static barkoutside() {
      console.log(this.breed +  " is doing bhow bhow bhow outside");
   }
};
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
      // below greet method will be local to the constructor class
      this.greet1 =()=> {
         console.log("Hello Everyone..!");
      }
   }
   // below method will go to the prototype object by default and available for nheritance
   greet() {
      console.log("Hello Everyone..!");
   }
}

Person.prototype.gender = 'm';


let p1 = new Person('mrinal', 30)
// console.log(p1);
// p1.greet();


//! Inheritance class
// creating extended classes

class Student extends Person {
   constructor(name, age, gender, grade) {
      super(name, age, gender);
      this.grade = grade;
   }

   study() {
      console.log(this.name + " is Studying in " + this.grade);
   }
}





class Teacher extends Person {
   constructor(name, age, gender, subject) {
      super(name, age, gender);
      this.subject = subject;
   }

   teaches() {
      console.log(this.name + " is Teaching " + this.subject);
   }
}

let stu = new Student('Somil', 33, 'M', 'MBBS');
// protochain for above inheritance
// stu.__proto__ --> Student.prototype
//Student.prototype.__proto__ -- > Person.prototype


let teach = new Teacher('Deepak Sir', 44, 'M', 'Sports');
// protochain for above inheritance
// teach.__proto__ --> Teacher.prototype
//teacher.prototype.__proto__ -- > Person.prototype

stu.study();
teach.teaches();


// let pomy = new Dog('kuttekanaam', 'kutte ki breed')

Dog.barkoutside();