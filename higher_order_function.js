// Given an array of radius find the Area , circumference , diameter , parameter of circle  using higher Order functions


let radiusArray = [2,4,8,16,32];

// ---------------   BAD WAY --------------------
function getDiameter(radius) {
   let diameters= [];
   for (let i = 0; i < radius.length; i++) {
      diameters.push(2 * radius[i]);
   }
   console.log(diameters);
}
function getCircumference(radius) {
   let circumferences = [];
   for (let i = 0; i < radius.length; i++) {
     circumferences.push(2 * Math.PI * radius[i]);
   }
   console.log(circumferences);
}

function getArea(radius) {
   let areas = [];
   for (let i = 0; i < radius.length; i++) {
      areas.push(Math.round( Math.PI * radius[i] * radius[i])); 
   }
   console.log(areas);
}
// getDiameter(radiusArray);
// getCircumference(radiusArray);
// getArea(radiusArray);

// ---------------   Good WAY --------------------
// now using a higher order function to do all this with one function
function newDiameter(radius) {
   let diameter =0;
   diameter = 2 * radius;
   return diameter;
}
function newArea(radius) {
   let area = 0;
   area = Math.PI * radius * radius;
   return area;
}
// Higher Order Function
function calculate(radius, formulae ) {
  let answer = [];
  for (let i = 0; i < radius.length; i++) {
   // Using a callback function
   answer.push(formulae(radius[i]));
  }
  console.log(answer);
}

calculate(radiusArray , newDiameter);
calculate(radiusArray , newArea);