let users = [
   { first_name: "John", last_name: "Doe", age: 30 },
   { first_name: "Jane", last_name: "Smith", age: 25 },
   { first_name: "Alice", last_name: "Johnson", age: 30 },
   { first_name: "Bob", last_name: "Brown", age: 40 },
   { first_name: "Sarah", last_name: "Williams", age: 28 },
   { first_name: "Michael", last_name: "Davis", age: 40 },
   { first_name: "Emily", last_name: "Jones", age: 32 },
   { first_name: "David", last_name: "Wilson", age: 27 },
   { first_name: "Olivia", last_name: "Martinez", age: 27 },
   { first_name: "Daniel", last_name: "Anderson", age: 38 }
];
// Question 1 find an array with fullnames of all entries using map function
function mergeNames(currentItem) {
   return currentItem.first_name + ' ' + currentItem.last_name;
}
let fullNamesMap = users.map(mergeNames);
// console.log(fullNamesMap);
// =========================
//? Question Find all the ages and number of people with each age

// sol = {
//    30: 2,
//    25: 1,
//    40: 2,
//    28: 1
// }

//! Trick  reduce function
// loop through each object.age 
// if new age 
// --> add to object also count 1
// else if existing age 
// -->  count ++ of that age 

const finalObject =  users.reduce(function (accumulator , currentItem) {
   if (accumulator[currentItem.age] != undefined){
      accumulator[currentItem.age] = accumulator[currentItem.age] + 1;
   }
   else{
      accumulator[currentItem.age] = 1;
   }
   return accumulator;

} , {});

// console.log(finalObject);


//! Question 3 Find first name of all the people whose age < 30;

// loop through all 
// find people age < 30 (filter)
// .then print name of all (map)

const firstNameBelowThirty = users.filter(isElegible).map(printName);
function isElegible(currentItem) {
return currentItem.age < 30;
}
function printName(currentItem) {
   return currentItem.first_name;
}
// console.log(firstNameBelowThirty);

// Question 3 solution using reduce

const firstNamelessThirty  =users.reduce(function (accumulator , currentItem) {
  if(currentItem.age < 30){
   accumulator.push(currentItem.first_name)
  }
   return accumulator
}, []);

console.log(firstNamelessThirty);