



function throttle(fn , delay) {
   let lastExecution = 0;
   return function(){
      let now = Date.now();
      if(now - lastExecution >= delay){
         fn();
         lastExecution = now;
      }
   }
}