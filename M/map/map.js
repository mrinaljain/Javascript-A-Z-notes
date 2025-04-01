let myMap = new Map();


// 1 Adding value to map
for (let i = 0; i < 10; i++) {
   myMap.set(i, `value${i}`);

}

console.log(myMap);


// 2 deleting key values

myMap.delete(5);

console.log(myMap);


// checking if key is present

let ans = myMap.has(3)
console.log(ans);


// size
let mapsize = myMap.size;
console.log("mapsize:", mapsize);


//iterating 1
for (const [key, value] of myMap) {
   // console.log(key);
   // console.log(value);
   
}

// iterating 2
myMap.forEach((key , value) => {
     console.log(key);
     console.log(value);
     
   
});






// map to array
let arr = Array.from(myMap);


// Array to map

let mapArr = Map(arr)

// clearing 

myMap.clear()
