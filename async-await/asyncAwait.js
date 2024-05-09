// 2 same promises
// 2 diffrent promises with same time
// 2 diffrent promises with p1(10sec)  p2(5sec)
// 2 diffrent promises with p1(5sec)  p2(10sec)

const p1 = new Promise(function(resolve, reject){
   setTimeout(() => {
      resolve('Promise ONE result');
   }, 5000);
});
const p2 = new Promise(function(resolve, reject){
   setTimeout(() => {
      resolve('Promise TWO result');
   }, 10000);
});

//! creating promices using async await 
// async function always returs a promise even if we not return it will convert return value to a promise
async function p3() {
   return 1;
}

//! 2 same promises
async function samePromiseHandeler() {
   console.log('Function Executon Started');
   const val1 = await p1;
   console.log('p1 resolved');
   console.log(val1);
   console.log('promises k bich ki line');
   const val2 = await p1;
   console.log('p2 resolved');
   console.log(val2);
   console.log('sabse aakhri vali line');
}
//! 2 diffrent promises with same time
async function diffPromiseSameTimeHandeler() {
   console.log('Function Executon Started');
   const val1 = await p1;
   console.log('p1 resolved');
   console.log(val1);
   console.log('promises k bich ki line');
   const val2 = await p2;
   console.log('p2 resolved');
   console.log(val2);
   console.log('sabse aakhri vali line');
}

//! 2 diffrent promises with p1(10sec)  p2(5sec)
async function diffPromiseDiffTimeHandeler() {
   console.log('Function Executon Started');
   const val1 = await p1;
   console.log('p1 resolved');
   console.log(val1);
   console.log('promises k bich ki line');
   const val2 = await p2;
   console.log('p2 resolved');
   console.log(val2);
   console.log('sabse aakhri vali line');
}

//! 2 diffrent promises with p1(5sec)  p2(10sec)
async function diffPromiseDiffTimeHandelerTwo() {
   console.log('Function Executon Started');
   const val1 = await p1;
   setTimeout(() => {
      console.log('SETTIMEOUT ki value 5 Second vale');
   }, 4000);
   console.log('p1 resolved');
   console.log(val1);
   console.log('promises k bich ki line');
 
   const val2 = await p2;
   console.log('p2 resolved');
   console.log(val2);
   console.log('sabse aakhri vali line');
}


// samePromiseHandeler();
// diffPromiseSameTimeHandeler();
// diffPromiseDiffTimeHandeler();
diffPromiseDiffTimeHandelerTwo();
console.log('Promise k bahar vali line');