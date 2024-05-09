//! Inversion of Control  / CALLBACK HELL  / Doom's Pyramid
// One function which is dependent on a callback and if that callback is dependent on another callback 
// this chain goes on this is called CALLBACK HELL  ( doom's Pyramid) because code starts looking like one.
// CODE grows horizontally 

// purchase example 
// selectcartitem --> createOrder --> make payment -- > success failure


const cart = ["item1", "item2", "item3"];


createorder(cart, function () {
   generateInvoice(orderId, function () {
      proceedToPayment(invoiceId, function () {
         checkPaymentStatus(paymentMessage, function () {
            updatewallet();
         })
      });
   });
});



