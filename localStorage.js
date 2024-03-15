let arr = [1,2,3,4,5,6,7];


localStorage.setItem('key', 'value');
let keyValue = localStorage.getItem('key');

//storing array  arr --> string
localStorage.setItem('array', JSON.stringify(arr));
// reading array value string --> array
let getArr = localStorage.getItem('array');

console.log(JSON.parse(getArr));


let i = 0;
// do {
//    localStorage.setItem(i , 'value');
//    i++;
// } while (i < 1000);   
// console.log(localStorage);