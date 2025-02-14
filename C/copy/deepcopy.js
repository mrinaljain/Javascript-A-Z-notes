

let user = {
  name: "Mrinal",
  age: 31,
};



let arr = [1, 2, 3, 4, 5, { 1: 2 }, [1, 2, 1, user, [(5, 7, 8)]]];


// Method 1
let clone = structuredClone(arr);
console.log("before", clone);
arr[6][3].name = "kunal";

//? name  property will remain same because of deep copy
console.log("After", clone);


// Method 2

let clone2 = JSON.parse(JSON.stringify(arr));

console.log("clone2", clone2);
