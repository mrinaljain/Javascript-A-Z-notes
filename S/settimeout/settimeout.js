let callback = function (...args){
console.log("hello");
console.log(...args);
};


setTimeout(callback, 5000, "new");


setTimeout(() => {
  console.log("Hello");
}, Infinity);
