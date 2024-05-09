let makePayment = function (isValid) {
   let pr = new Promise(function (resolve, reject) {
      if (isValid) {
         setTimeout(() => {
            resolve(" Promise Resolved ...!");
         }, 5000);
      } else {
         setTimeout(() => {
            let err = new Error("Promise Failed...")
            reject(err);
         }, 5000);
      }

   });

   return pr;
}
//! 1) Handeling error with (rejection handeler)
// makePayment(false)
//    .then(function (response) {
//       console.log(response);
//     }, function (error) {
//       console.log(error.message);
//    });

//! 2) Handeling error with (catch method)
makePayment(false).then(function (response) {
      console.log(response);
}).catch(function (error) {
   console.log(error.message);
});
