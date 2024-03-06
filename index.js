//* self invocked imideitly function
// (function () {
//    console.log("Hello World");
// })();
// select p tag
var pTag = document.querySelector('body p');
console.log(pTag);
// update inner text
pTag.innerText = '2 + 2 = 4';

// // find the ul
// var ulList = document.querySelector("ul.list");
// console.log(ulList);
// // find all the li store in an array
// var listItem = document.querySelectorAll("ul.list li");
// console.log(listItem);
// // create a li with 7
// var itemToBeAdded = document.createElement("li");
// itemToBeAdded.innerText = '7';
// // insert li into  position 7 using append or prepend
// listItem[5].appendChild(itemToBeAdded);
// var btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//    let divToAdd = document.createElement('div');
//    divToAdd.innerText = 'Hello';
//    let body = document.querySelector('body');
//    body.appendChild(divToAdd);
// });

// let allCard = document.querySelectorAll(".card")

// for (let i = 0; i < allCard.length; i++) {
//    allCard[i].addEventListener('dblclick', function (e) {
      
//       console.log(e.target);
//       let classToBeAdded = e.target.getAttribute('data-color');
//       e.target.classList.add(classToBeAdded);
//       e.target.setAttribute("data-color","used");
//       // console.log('Card Clicked');
//    });
// }
   
  



// var button = document.getElementById("button");
// button.addEventListener('click' , function (){
//    console.log("clicked");
//    let p = document.createElement("p");
//    p.innerText = "new para added";

//    let par = document.getElementById('parent');

//    par.appendChild(p);
//    // return p;
// });
// function buttonclick() {
//    let p =document.createElement("P");
//    p.innerText = "Hello button clicked";
//    return p;

// }

//* Block scope 

// let b = 30;
// {
//    var a = 10;
//    let b = 20;
//    const c =  30;
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// {
//    let b = 10;
//    console.log(b);
// }
// let a = 20;
// console.log(a);
// console.log(b);
// console.log(c);
//* Block scope 


//* shadowing in function 
// var a = 100;
// // function x() {
//    {
//    var a = 10;
//    console.log(a);
// }
// // x();
// console.log(a);

//* shadowing in function 

// // Example 1
// var n =2;
// function square(num) {
//    var ans = num * num;
//    return ans;
// }

// var square2 = square(n);
// var square4 = square(4);


// // Example 2


// var x = undefined;

// function getName() {
//    console.log('Namaste Javascript !');
// }

// getName();
// console.log(x);
// // console.log(getName);
// // accessing a variable from global scope
// // console.log(window.x);

// // accessing a function from global scope
// // console.log(this.x);
// // console.log(m);
// console.log("Type of x is :");
// console.log(typeof x);


// var b = 20;
// function a() {
//    // var b = 10;
//    c();
//    function c() {
//       console.log(b);
//    }
// }
// var b = 30;

// a();
// console.log(b);


//* Hoisting 
// var x = 3;
// function getName() {
//    var some = "Namaste Javascript";
//    console.log(some);   
// }
// getName();
// console.log('Value of x is ' + x);
// console.log(getName);
//* Hoisting

//* how functions work 
// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//    var x = 10;
//    console.log(x);
// }
// function b() {
//    var x = 100;
//    console.log(x);
// }
//* how functions work 


// * Global Scope
// var a = 10;
// {
//    var b = 20;
// }
// * Global Scope

//* Lexical Scope
//  function a() {
//    var c = 20;
//    b();
//    function b() {
//       console.log(c);
//    }
//  } 
//  a();

//* Lexical Scope

//* let const 

// var a = 20;

// {
//    let b = 30;
//    console.log("inside scope 30: " + b);

// }
// a =50;
// b = 60;
// console.log(a);
// console.log("outside scope 60: " + b);

//* let const

//* let const Hoisting

// error canot use before initilization
// console.log("BEFORE let " + a);

// console.log("BEFORE var " + b);
// let a = 10;
// var b =100;

// console.log("AFTER let " + a);
// console.log("AFTER var " + b);


//* let const Hoisting

//* Functional Programing
//! need to debug 

// function square(a){
//   console.log(a);
// }
// var callback = function(){
//    return 5;
// }
// square(callback); 

//* Functional Programing

// var a =  [1 ,2, 3, 4,];

// a.forEach(element => {
//    if (a.length > 0){
//       a.pop();
//    }
//    console.log(a);
//    console.log(a.length);
// });

// let myRadiusArray = [2,3,4,5,8];

// function getArea(arr){
//    var areaArray = [];
//    for (let i = 0; i < arr.length; i++) {
//       areaArray.push(3.14 * arr[i] * arr[1]);
//    }
//    console.log(areaArray);
// }
// function getDiameter(arr) {
//    var diameterArray = [];
//    for (let i = 0; i < arr.length; i++) {
//       diameterArray.push(2 * arr[i]);
//    }
//    console.log(diameterArray);
// }

// getArea(myRadiusArray);
// getDiameter(myRadiusArray);


// let arr = [1,2,3,4,5,6];
// var result = [];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i]%2 == 0){
//       result.push(arr[i]);
//    }
// }
// console.log(result);
//* Functional Programing
