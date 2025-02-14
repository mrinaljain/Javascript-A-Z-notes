let newSet = new Set([1,1,1,1,1,2,2,2,2,]);


newSet.add(5);
console.log(newSet.size);


var nameSet = new Set([]);

// converting array to set

let arr = [1,2,3,4,5,6,7,8,9,3,2,1,6,5,4,9,7];


let setOfArrayElements  = new Set(arr);
// console.log(setOfArrayElements);


let againArray = [...setOfArrayElements];

console.log(againArray);


