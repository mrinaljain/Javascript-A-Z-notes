//? creating Debounce function
// 1) add  key up eventlistener on search
// read value on keyup and pass it to the debounce function
// 2) Inside debounse function start a timer of 5 second 
// 3) once timer complete make API call 
// 4) if the typing event comes before timer ends then restart the timer. 

let searchBox = document.getElementById('searchBox');

///? With Debounce
searchBox.addEventListener('keyup', debounce(apiCaller, 600));

///? Without Debounce
// searchBox.addEventListener("keyup", apiCaller);


/// Enhanced  function for our API call which will return a callback hence we call it  the debounce function
function betterApiCaller(actualFunctionTobeCalled, delay) {
   let timer;
   return function () {
      let context = this;
      args = arguments;
      if (timer) {
         console.log(`timer exists : ${timer}`);
         clearTimeout(timer);
      }
      console.log(`timer not exists : ${timer}`);
      timer = setTimeout(() => {
         actualFunctionTobeCalled.apply(context, arguments);
      }, delay);

   }
}

// practice writing debounce
function debounce(actualFunction , debounceDelay) {
   let timer;
   return function (...args){
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
         actualFunction.apply(context,args);
      }, debounceDelay);

   }
}

//! actualFunctionTobeCalled Function which makes an API call
count = 0;
function apiCaller(e) {
   console.log(++count + " API Call Done : " + e.target.value);
   // console.log(count++ + " API Call Done : ");
}


// Q1 ) can you explain value of timeoutId
// when setTimeOut is running
// when setTimeout is done running

// Q2 ) considering x, y, z beer requests.
// I will get all 3 beers a 200ms ?