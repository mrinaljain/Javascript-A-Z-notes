/* splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1, item2,  itemN) */

const months = ["Jan", "bef", "March", "April", "May", "June", "July"];

//! Removing elements

//? splice for only removing
// months.splice(4, 1);

//! Adding elements

//? Remove + Add  splice(start, deleteCount, item1, item2,  itemN)
// let ans = months.splice(3 , 2 , "change", "another");
// console.log(ans);

//! Replacing Elements

months.splice(1, 1, "Feb");

console.log(months);

//! using negative index

//! removing all elements
// arr.splice(0, arr.length);
