//1

const arr1 = [1, 2, 3, 3, 4, 5, 5];

let set = new Set(arr1);
// useed spread opp to spread values of set into an arrau
let uniqueArr = [...set];
console.log(uniqueArr);

// 2

const arr2 = [1, 2, 3, , 4, 5];
function callback(previousValue , currentValue , currentIndex, arr){
 currentValue = previousValue + currentValue;
 return currentValue;

}
let ans = arr2.reduce(callback, 0);


console.log(ans);

// 3
const arr31 = [1, 2, 3, 4];
const arr32 = [3, 4, 5, 6];

let intersection = arr31.filter((item , index) => arr32.includes(item));


console.log(intersection);

// 4
const arr4 = [1, 2, 3, 4];

function swaper([one , two , ...rest]){
   return [two, one , ...rest];
}

let ans4 = swaper(arr4);
console.log(ans4);

//6 
const arr5 = [1, 2, 3, 4];
structuredClone(arr5)


