let makePayment = function(isValid) {

   let pr = new Promise(function (resolve, reject) {
      if(successtype){
         setTimeout(() => {
            resolve(" Promise Resolved ...!");
         }, 5000);
      }else{
         reject("Promise Failed...");
      }
      
   });

   return pr;
}





// console.log(makePayment);
makePayment(false).then(function (response) {
   console.log(response);
   return new Promise((resolve , reject) => {
      setTimeout(() => {
         resolve(response)
      }, 5000);
   }
);  
}).then((res)=>{
   console.log(res);
});
// console.log(makePayment);