// function x(){
//    var i = 10;
//    setTimeout(function() {
//       console.log(i);
//    }, 3000);
// }
// x();

function x() {
   // var i = 1;
   for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
         console.log(i);
      }, i*1000);
   }
}
x();