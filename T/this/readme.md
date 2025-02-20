# this  
CURRENT CALLING OBJECT
"this" is a keyword in JavaScript that refers to the object that is currently executing the function.

1. this in **global context** points to window object
2. this in **class** will reffer to the class
```

const user={
    firstName:"Prakash",
    lastName:"Kumar",
    printFullName:function(){
        console.log(this) // user object
        function willTryAccessFullname(){
            console.log(this) // global window
        }
        willTryAccessFullname()
    }
}

user.printFullName()

                
```
3. this in **function** 
   - will reffer to the global in non Strict mode
   - will reffer to undefined ifstrict mode is on
4. **Arrow function** doesnot have there own this so they reffer to lexical parents this

5. **Event handeler** mai this will reffer to the event node
```

document.getElementById("btn").addEventListener("click",function(){

    console.log(this)
    const performAction=()=>{
        console.log(this)

    }
    performAction()
})
   
```


## this substitution


### Questions

```
const student={
    firstName:"Prakash",
    lastName:"Kumar",
    address:{
        city:"Sonpur",
        state:"Bihar",
        pincode:111111,
        fullAddress:function(){
            console.log(this)
            function willTryAccessFullAddress(){
                console.log(this)
            }
            willTryAccessFullAddress()
            
        }
    }
}
student.address.fullAddress()
                

-----

 
const student={
    firstName:"Prakash",
    lastName:"Kumar",
    address:{
        city:"Sonpur",
        state:"Bihar",
        pincode:111111,
        fullAddress:function(){
            console.log(this)
            const willTryAccessFullAddress=()=>{
                console.log(this)
            }
            willTryAccessFullAddress()
            
        }
    }
}
student.address.fullAddress()

-----

document.getElementById("btn").addEventListener("click",function(){
  console.log(this)
  });
  
----
```