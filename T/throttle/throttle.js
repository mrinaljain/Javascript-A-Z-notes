

let searchBtn = document.getElementById("searchBtn");

//? without throttling
// searchBtn.addEventListener("click", apiCaller);


//? with throttling
searchBtn.addEventListener("click", throtleFinal(apiCaller, 5000));

// ! 1) Namaste JAvascript way of creating throttle (settimeout)   wrong way 
// function betterApiCaller(actualFunctionTobeCalled, delay) {
//    let flag = true;
//    return function(...args){
//       searchBtn.disabled = true;
//       let context = this;
//       args = arguments;
//       if (flag){
//          actualFunctionTobeCalled.apply(context, arguments);
//          flag = false;
//          setTimeout(() => {
//             actualFunctionTobeCalled.apply(context, arguments);
//             flag = true;
//          }, delay);
//       }
//    }
// }

// !2) way of creating throttle (using date time )
function throttle(actualFunctionTobeCalled, delay) {
   let lastExecution = 0;
   return function (...args) {
      let now = Date.now();
      let context = this;
      args = arguments;
      console.log(`Last Execution : ${now}`);
      if (now - lastExecution >= delay) {
         // assuming   20 min delay is set
         // current time = 2:30 PM
         // last execution : 2:15 PM
         // as diffrence is 15 min which is less then delay so request will not be completed 
         actualFunctionTobeCalled.apply(context, arguments);
         lastExecution = now;
      }
   }
}

//!3 practice writing throtle
function throtle(actualFuncion, throttleDelay) {
   let lastExecutionTime = 0;
   return function (...args) {
      let now = Date.now();
      let context = this;
      // now - last time >= delay
      if (now - lastExecutionTime >= throttleDelay) {
         actualFuncion.apply(context, args);
         lastExecutionTime = now;
      }

   }
}


///? actualFunctionTobeCalled Function which makes an API call
count = 0;
function apiCaller() {
   console.log(++count + " API Call Done : ");
}



//! 4 Practice Throttle

// we will create a function which will take a function and delay as arguments
// function will return a better function which then will be attached to the eventlistener
// now  we need to check time diff between 2 function calls

function throtleFinal(fun, del) {
   let lastCalled = 0;
   return function (...args) {
      var date = new Date();
      let now = date.getTime()
      if (now - lastCalled > del) {
         fun.apply(this, [args]);
         lastCalled = now;
      }
   }
}