const p1 = new Promise(function(resolve, reject){
   setTimeout(() => {
      resolve('Promise ONE result');
   }, 15000);
});
const p2 = new Promise(function(resolve, reject){
   setTimeout(() => {
      resolve('Promise TWO result');
   }, 30000);
});



async function promiseHandeler() {
   console.log('Function Executon Started');
   const val1 = await p1;
   console.log('p1 resolved');
   console.log(val1);

   const val2 = await p2;
   console.log('p2 resolved');
   console.log(val2);
}

promiseHandeler();