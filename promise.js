let cart = ["jeans", "tshirt", "shoes"];


// let promise = createOrder(cart, true);
// checking promise value before attaching then( pending state)
// console.log(promise);
// Promise Chaining
   createOrder(cart, true)
   .then(function (orderId) {
      console.log("First Promise Resolved");
      console.log(orderId);
      return orderId;
   })
   .then(function (orderId) {
      console.log("Second Promise Resolved");
      console.log(orderId);
      return proceedToPayment(orderId);
   })
   .then(function (paymentInfo) {
      console.log("Third Promise Resolved");
      console.log(paymentInfo);
      return showOrderSummary(paymentInfo)
   })
   .then(function (walletInfo) {
      console.log("Fourth Promise Resolved");
      console.log(walletInfo);
      updateWalletInfo(walletInfo);
   })
   .catch(function (errorObj) {
      console.log(errorObj.message);
   });
//! Note:
// .then can accept 2 functions also , 1 for success and other for reject

// createOrder promise
function createOrder(cart, isValid) {
   let isValidCart = isValid;
   let orderId = "2226906"
   let pr = new Promise(function (resolve, reject) {
      if (!isValidCart) {
         let err = new Error("promise Failed..");
         reject(err);
      } else {
         setTimeout(() => {
            resolve(orderId);
         }, 5000);
      }
   })
   return pr;
}

// proceedToPayment promise
function proceedToPayment(orderId) {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         resolve("Payment Successful for " + orderId);
      }, 5000);
   }
   );
}
// showOrderSummary
function showOrderSummary(paymentInfo) {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         resolve("Order summary Shown " + paymentInfo)
      }, 5000);
   }
   );
}
// updateWallet
function updateWalletInfo(walletInfo) {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         resolve("Wallet Updated")
      }, 5000);
   }
   );
}

