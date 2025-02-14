// REfference Type



let user = {
   name: "Mrinal",
   age: 31
};


let arr = [1, 2, 3, 4, 5, { 1: 2 }, [1, 2, 1, user,[(5, 7, 8)]],];


let clone = arr.slice();

console.log("Before", clone);
// because its a shallow copy then all the elements will get affected
arr[6][3].name = "kunal";
console.log("After", clone);


// let ans2 = [...arr];
// console.log(ans2);

