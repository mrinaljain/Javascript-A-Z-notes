var personOne;
var personTwo;
setTimeout(() => {
   personOne = prompt('Enter Name One');
   personTwo = prompt('Enter Name TWO');
   calCulateLovePercentage(personOne, personTwo);
}, 5000);


function calCulateLovePercentage(nameOne , nameTwo) {

  let lovePercent = calculateRandomPercentage();

  if (lovePercent > 70 && lovePercent < 100 ) {
    alert('Thats awesome ' + nameOne + ' and ' + nameTwo + ' is ' + lovePercent + '%');
    
  }else{
    alert( 'Love Percentage of ' + nameOne + ' and ' + nameTwo + ' is ' + lovePercent + ' %');

  }
   
}

 function calculateRandomPercentage() {
   let randomPercent = 0;
   randomPercent = Math.floor(Math.random() * 100);
   // +1 added to shift range from 0-99 to 1 -100
    return randomPercent +1;
}