let cartItems = [2, 3, 4, 5, 6, 7, 8, 9, 10];


// filter an array based on even numbers only
function isEven(num) {
   return num % 2 === 0;
}
let filteredArray = cartItems.filter(isEven);
console.log(filteredArray);

