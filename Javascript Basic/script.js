// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output: Today is: Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
const day = date.getDay();
const time = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
let weekDay;
switch (day) {
   case 1:
      weekDay ="Monday"
      break;
   case 2:
      weekDay = "Tuesday"
      break;
   case 3:
      weekDay = "Wednesday"
      break;
   case 4:
      weekDay = "Thursday"
      break;
   case 5:
      weekDay = "Friday"
      break;
   case 6:
      weekDay = "Saturday"
      break;
   case 7:
      weekDay = "Sunday"
      break;
   default:
      break;
}

let finalQuote = `Today is: ${weekDay}.
Current time is : ${time - 12} ${time > 12 ? 'PM' : 'AM'} : ${min} : ${sec}`;

console.log(finalQuote);
//! ---------------------------------- //

// 2. Write a JavaScript program to print the current window contents.

console.log(window);

//! ---------------------------------- //

//3. Write a JavaScript program to get the current date.  
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

let currentDate = new Date();

const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const finalStr = `${currentMonth} - ${currentDay} - ${currentYear}`
console.log(finalStr);

//! ---------------------------------- //
//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

function calculaeArea( side1 , side2 , side3) {
   
   console.log();
}