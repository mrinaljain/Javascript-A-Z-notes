/* splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1, item2,  itemN) */

const months = ["Jan", "March", "April", "June", "July"];

months.splice(3 , 2 , "change", "another");
console.log(months);


months.splice(4, 1, 'May');
// Replaces 1 element at index 4

// console.log(months);
