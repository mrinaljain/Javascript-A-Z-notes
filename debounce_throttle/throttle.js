let searchBtn = document.getElementById("searchBtn");

//? without throttling
// searchBtn.addEventListener("click", apiCaller);


//? with throttling
searchBtn.addEventListener("click", betterApiCaller(apiCaller ,5000));

// ! 1) Namaste JAvascript way of creating throttle (settimeout) 
function betterApiCaller(actualFunctionTobeCalled, delay) {
   let flag = true;
   return function(...args){
      searchBtn.disabled = true;
      let context = this;
      args = arguments;
      if (flag){
         actualFunctionTobeCalled.apply(context, arguments);
         flag = false;
         setTimeout(() => {
            actualFunctionTobeCalled.apply(context, arguments);
            flag = true;
         }, delay);
      }
      
   }
}

// !2) way of creating throttle (using date time )
function throttle(actualFunctionTobeCalled, delay) {
   let lastExecution = 0;
   return function(...args){
      let now = Date.now();
      let context = this;
      args = arguments;
      if(now - lastExecution >= delay){
         actualFunctionTobeCalled.apply(context, arguments);
         lastExecution = now;
      }
   }
}




///? actualFunctionTobeCalled Function which makes an API call
count = 0;
function apiCaller() {
   console.log(++count + " API Call Done : ");
   searchBtn.disabled = false;
}