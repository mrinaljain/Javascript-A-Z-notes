// call apply Bind is used for function borrowing in JS
// function borrowing matlab using kisi aur object ka ya normal function  to perform operations on some other object ki values using pointing this of old object to the new object
"usestrict";

let employee = {
  firstName: "Mrinal",
  lastName: "Jain",
  age: 33,
  printFullName: function (city, desegination) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " live in " +
        city +
        " and works as a " +
        desegination
    );
  },
  getAge: function () {
    console.log(this.age);
  },
};

// employee.getAge();
// employee.printFullName();

// Ye thi aam zindagih

// aab niche mentos zindagi
// lets say we have another employee  without print name method
// we will borrow [printFullName] method from above object using call , apply , bind

let employeeTwo = {
  firstName: " Sourav",
  lastName: "Choudhary",
  age: 25,
};


//! Using call
// call(oldobject , params);
// call is a method available on top of a function allows us to change the current calling object of the function
employee.printFullName.call(employeeTwo, "Delhi", "Software Developer");
// employee.getAge.call(employeeTwo);

//! Using apply:
/// passing the same parameters in a singular array

employee.printFullName.apply(employeeTwo, ["Delhi", "Software Developer"]);

//! Using Bind
// Bind will make a copy of orignal method which can be called later
// here first param will be chamdigar and second will be Flutter

let bindedFunction = employee.printFullName.bind(employeeTwo, "Chandigarh");
bindedFunction("Flutter");

// monika.deductMonthelyFee.call(rachel, 233);
