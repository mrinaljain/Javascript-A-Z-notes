let products = [
   {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "Description for Product 1"
   },
   {
      id: 2,
      name: "Product 2",
      price: 19.99,
      description: "Description for Product 2"
   },
   {
      id: 3,
      name: "Product 3",
      price: 5.99,
      description: "Description for Product 3"
   }
];


 function getProduct(callbackFunction) {
   setTimeout(() => {
      callbackFunction(products);
   }, 2000);
}

let globalValue;
let callback = function (value) {
   globalValue = value;
   console.log("Inside :" + globalValue);
}
getProduct(callback);
console.log("Outside :" + globalValue);