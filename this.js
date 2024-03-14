'use strict';

// this in the global space
console.log('Global Space');
console.log(this);


// this inside function 

function a(){
   // let b = 10;
   console.log(this);
}
console.log('Inside Function Without object refrence');
a();
console.log('Inside Function With object refrence');
window.a();