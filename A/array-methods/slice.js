const arr = ["ant", "bison", "camel", "duck", "elephant"];



// slice(start, end)
let ans = arr.slice(0, 2);
console.log("Sliced Array", ans);
console.log("Original Array", arr);
console.log("Original Array remains the same");

// slice()
let ans2 = arr.slice();
console.log(ans2);

// slice(start)
let ans3 = arr.slice(1);
console.log(ans3);

// negative index
let ans4 = arr.slice(-1);
console.log(ans4);

// negative start index
let ans5 = arr.slice(-3);
let ans6 = arr.slice(-3, 4);

console.log(ans5);
console.log(ans6);

// negative end index
let ans7 = arr.slice(3, -2);

console.log(ans7);

// start is equal to end
let ans8 = arr.slice(3, 3);

console.log(ans8);


//Both Start and End as Negative Values

let ans9 = arr.slice(-2, -4);
let ans10 = arr.slice(-4, -2);

console.log("ans9", ans9); // "camel", "duck"
console.log("ans10", ans10); // "bison", "camel"