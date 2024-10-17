# Loops



## 1. Arrays
Arrays are simple iterable datastructures which can be traversed via multiple types of loops.



```
let user = ["mrinal", "jain", "sanawad", "indore"];
```

### 1.1 for Loop

```
for(let i = 0; i < user.length; i++){
   console.log(user[i]);
}
```

### 1.2 for-each Loop

```
user.foreach(()=>{


});
```

### 1.3 for-of Loop
```
for(int key of user){


}
```


## 2. Objects
Objects are not iterable. just like arrays. So what we need to do is that extract the  array out of it and then loop over the array.

### 2.1 for-in method [Object]

This method loops over the object , but also includes the keys inside the protochain hence its not trustworthy to use this
```
var user = {
   name: "Mrinal",
   job: "Developer",
   city: "Indore",
   check: "property"
}

for(const key in user){
   console.log(key);
   console.log(user[key]);
}
```

## Object Static Methods

Object static methods are the methods which take an object as parameter and return Array as a response.

- Object.keys
- Object.values
- Object.entries

Further this returned array can be used in any way possible

