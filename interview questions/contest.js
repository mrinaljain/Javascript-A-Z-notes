// Q1
// function delay(ms) {
//    return new Promise((resolve)=>{
//       setTimeout(() => {
//          resolve('Done');
//       }, ms);
//    })
// }

// async function foo() {
//    console.log('Start');
//    await delay(2000);
//    console.log("End");
// }

// foo();
// console.log('After Foo');

// Q2 
class Shape{
   constructor(){
      this.name = 'Shape';
   }

   getName(){
      return this.name;
   }
}

class Circle extends Shape{
   constructor(){
      super();
      this.radius = 5;
   }

   getName(){
      return super.getName() + '(Circle)';
   }
}

const circle = new Circle();

console.log(circle.getName());

// Q4

var number = 5;
function multiplyByTwo(x) {
   number = x * 2;
}

multiplyByTwo(10);

console.log(number);

// Q5

// function outer() {
//    let x =10;
//    function inner() {
//       console.log(x);
//    }
//    x = 50;
//    return inner;
// }
// let clousure = outer();

// clousure();

// Q6

function outerfn() {
   let x = 5 ;
   return function inner(y) {
      x+=y;
      return x;
   }
}
let clousure = outerfn();
console.log(clousure(3));
console.log(clousure(2));


//Q7
function delay(ms) {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve('Done');
      }, ms);
   })
}

async function foo() {
   console.log('Start');
   await delay(1000);
   console.log('Middle');
   await delay(2000);
   console.log("End");
}

foo();
console.log('After Foo');