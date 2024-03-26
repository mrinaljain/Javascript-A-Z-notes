//? creating Debounce function
// 1) add  key up eventlistener on search
// read value on keyup and pass it to the debounce function
// 2) Inside debounse function start a timer of 5 second 
// 3) once timer complete make API call 
// 4) if the typing event comes before timer ends then restart the timer. 

let searchbtn = document.getElementById('searchBox');


searchbtn.addEventListener('keydown', debounce(apiCaller, 200));

/// Enhanced  function for our API call which will return a callback hence we call it  the debounce function
function debounce(fun, debounceTime) {
   let timerId;
   return function (e) {
      clearTimeout(timerId);
      timerId = setTimeout(fun(e), debounceTime);
   }
}
const debounceFunc = debounce(()=> {
   console.log("Debounced Function Called");
}, 300);


//! Debounce Enhanced version
function enhancedDebounce(apiCaller, debounceTime) {
   return function () {
      let timerId;
      clearTimeout(timerId);
      timerId = setTimeout(apiCaller, debounceTime);
   }
}


/// Function which makes an API call
// e is always inside callback function of eventlistener
function apiCaller() {
   // console.log("API Call Done" + e.target.value );
   console.log("API Call Done" );
}
debounceFunc();
// debounceFunc();
// debounceFunc();


// Q1 ) can you explain value of timeoutId
// when setTimeOut is running
// when setTimeout is done running

// Q2 ) considering x, y, z beer requests.
// I will get all 3 beers a 200ms ?