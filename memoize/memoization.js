// Memoization basically means k agar ek function  ko same  parameter se call karo agar baar baar to paheli baar mai to time lagega but dusri baar se bahut kam time lagna chahiye .
// bole to result cache se uth k aana chahiye



// normal function
function multiply ( a , b) {
   return  a * b;
}

// now we will create a memoize function creator
// ek side se normal function daalo dusri side se memoize function bahar

let memoizeFunctionMaker = function(normalFunction) {
   let cache = {};
   let memoizedFunction = function(...args){
      let key = args.join("_");
      console.log(`key: ${key}`);
      // if parameter present in cache return answer from cache
      if (cache.hasOwnProperty(key)){
         console.log("From Cache");
         return cache[key];
      }  
      // else calculate new answer-> save i cache --> then return it
      else{
         console.log("Calculation Fresh");
         let result = normalFunction(...args);
         cache[key] = result;
         return result;
      }
   }
   return memoizedFunction; 
} 


///! Normal Funcall
console.time("myTimerstart");
console.log(multiply(100 ,2));
console.timeEnd("myTimerstart");

//! Memoised Function call
let memoisedMultiply = memoizeFunctionMaker(multiply);
console.time("myTimerstart");
console.log(memoisedMultiply(100 , 2));
console.timeEnd("myTimerstart");


console.time("myTimerstart");
console.log(memoisedMultiply(100, 2));
console.timeEnd("myTimerstart");