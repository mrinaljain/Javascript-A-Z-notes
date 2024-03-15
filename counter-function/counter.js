// 1. span#number => contains the current number value.
// 2. input#increment => field that takes the input for the increment number / factor. (default is 1)
// 3. button#add => when clicked updates the span#number by adding increment number to it.
// 4. button#subtract => when clicked updates the span#number by subtracting increment number from it.
// 5. button#reset => changes the span#number to 0 again.

// Make sure the input for increment number is always parsed to Integer using parseInt(input).

// add onchange event for input
//  get value of inputIncrement -- > var
//  get the span value currently 0 -- >
// click event on add
// --> read the global value of increment
// -->  update span value to span + inputIncrement
// click event on  decreese 
// --> read the global value of increment
// -->  update span value to span - inputIncrement
// -- > add check for 0
// click event on reset button
// --> reset the global value to 0 again 

let addButton = document.getElementById("add");
let substractButton = document.getElementById("subtract");
let resetButton = document.getElementById("reset");
let currentCountSpan = document.getElementById("number");
let incrementCountInputBox = document.getElementById("increment");
var currentIncrementor = 1;

incrementCountInputBox.addEventListener('change', function(e){
   currentIncrementor =  e.target.value;
   console.log(currentIncrementor);
});
addButton.addEventListener('click', function(e){

   console.log(currentCountSpan.textContent);
   console.log(currentIncrementor);
   currentCountSpan.innerText = parseInt(currentCountSpan.textContent) + parseInt(currentIncrementor)
});
substractButton.addEventListener('click', function(e){

   console.log(currentCountSpan.textContent);
   console.log(currentIncrementor);
   currentCountSpan.innerText = parseInt(currentCountSpan.textContent) - parseInt(currentIncrementor)
});
resetButton.addEventListener('click', function(e){
   currentCountSpan.innerText = parseInt('0');
});