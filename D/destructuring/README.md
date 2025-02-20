# Destructuring

basically dividing array OR object into multiple individual items so that they can be accessed easily.
```
const myName = Array/Object/String; 

const [a, b, c] = myName; 

```




## Array Destructuring

```

```


## String Destructuring

```
const myName = "Prakah"; 

const [a, b, c] = myName; 

```


## Object Destructuring
- destructured key names need to match the key name in object 

```
let user = {
name:"Prakash",
age:22,
college:"abc",
marks:12


};

let {name, age, college} = user;
```

## Set Destructuring
- when Set is destructured it results int an array with **Unique elements**
```
const nums=new Set([2,2,4,4,4,4,3,4,8,4,5,,4])
const [a,b,c]=nums
const [a1,,,b1,c1]=nums

console.log(a,b,c) // [2,4,3]
console.log(a1, b1, c1)
``` 

### Extra items in Destructuring

- Skiping an element
```
const [a, b,,c , d] = items;  
// use double comma to skip an element 
// use triple comma to skip 2 elements
```

- Default values of properties
```
let arr=["Prakash","Kumar"]
const [firstName="Teacher", lastName="Trek"]=arr
console.log(firstName,lastName)
```