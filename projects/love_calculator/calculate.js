var personOne;
var personTwo;
setTimeout(() => {
   personOne = prompt('Enter Name One');
   personTwo = prompt('Enter Name TWO');
   calCulateLovePercentage(personOne, personTwo);
}, 5000);


function calCulateLovePercentage(nameOne , nameTwo) {
   
  alert( 'Love Percentage of' + nameOne + 'and' + nameTwo + 'is' + calculateRandomPercentage());
}

 function calculateRandomPercentage() {
   let randomPercent = 0;
   randomPercent = Math.floor(Math.random() * 100);
    return randomPercent;
}