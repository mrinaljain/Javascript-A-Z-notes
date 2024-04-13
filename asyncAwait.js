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

//! creating promices using async await 
// async function always returs a promise even if we not return it will convert return value to a promise
async function p3() {
   return 1;
}

async function promiseHandeler() {
   console.log('Function Executon Started');
   const val1 = await p1;
   console.log('p1 resolved');
   console.log(val1);

   const val2 = await p2;
   console.log('p2 resolved');
   console.log(val2);
   const val3 = await p3();
   console.log(val3);
}


promiseHandeler();