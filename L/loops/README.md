# Loops

```
let user = ["mrinal", "jain", "sanawad", "indore"];
```

### for `Array`

```
for(let i = 0; i < user.length; i++){
   console.log(user[i]);
}
```

### for-each `Array`

```
user.foreach(()=>{

});
```

### for-of `Array`
 - better then forEach

```
for(int key of user){


}
```



### for-in method `Object`

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





## Questions
1. Difference Between forEach and for...of ?
   - **`forEach` always loops through all elements**, but **`for...of` can exit early with `break`**. 
   - **`forEach` is a method**, but **`for...of` is a loop**.  
   - **`forEach` does not support `break` or `continue`**, but **`for...of` does**.  
   - **`forEach` executes a callback function**, but **`for...of` directly iterates over values**.  
   - **`forEach` is limited to arrays**, but **`for...of` works on arrays, maps, sets, strings, etc.**.  
   - **`forEach` does not work well with `async/await`**, but **`for...of` supports `await` inside loops**.  
   - **`forEach` has slight performance overhead (callback execution)**, but **`for...of` is generally faster**.  

