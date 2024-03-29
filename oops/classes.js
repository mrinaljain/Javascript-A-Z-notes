// ES 6 introduced concept of  classes which is same as the constructor functions , just a syntactical sugar 


class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
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


// creating extended classes

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
let teach = new Teacher('Deepak Sir', 44, 'M', 'Sports');

stu.study();
teach.teaches();