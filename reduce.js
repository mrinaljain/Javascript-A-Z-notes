// used to find/calculate a single value  from a given Array in input


let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// finding sum of all items using reduce
let sumOfAll =  items.reduce(function (accumulator, currentItem) {
   accumulator = accumulator + currentItem;
   return accumulator
}, 0);
// console.log(sumOfAll);


// find maxvalue  of the array using reduce

let maxvalue = items.reduce(function (accumulator, currentItem) {
 if (currentItem > accumulator){
   accumulator = currentItem;
 }
 return accumulator
}, 0);

console.log(maxvalue);
