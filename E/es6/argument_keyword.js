/// argument keyword is available inside function which is an array like object   jiske andar sare parameter mil jate hai jo pass kiya hai 

function kallKaro(i, j) {
  console.log(arguments);
  console.log("i", i);
  console.log("j", j);
  console.log(arguments[0]);
  console.log("Khali Function");
}

kallKaro(1, 2 , 3 , 4 );