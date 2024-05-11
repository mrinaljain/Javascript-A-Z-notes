let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];


console.log([...arr1, ...arr2]);


const dummyObject1 = { name: 'Alice', age: 30, city: 'New York', country: 'USA', isAdmin: true };
const dummyObject2 = { brand: 'Apple', model: 'iPhone 12', color: 'Black', storage: '256GB', price: 999 };


let newObj = { ...dummyObject1, ...dummyObject2 }