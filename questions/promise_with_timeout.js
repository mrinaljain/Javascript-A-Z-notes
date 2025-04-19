// reject the promise if it doesnot resolve in 10 second


function betterPromise(orignalPromise , timeLimit){
// ek naye promis mai timer chala denge 10 second ka aur usme se reject karenge
let rejectedPromise = new Promise((res, reject)=>{
  setTimeout(() => {
   reject(new Error("Time limit exceded"))
  }, timeLimit);
})
// aur ek promise to already hai 

// in dono ki race kara denge , jo jita vahi sikandar
   let p = Promise.race([orignalPromise, rejectedPromise]);

   return  p;
}


let p1 = new Promise((resolve, reject)=>{
   setTimeout(() => {
      resolve("Promise resolved")
   }, 8000);
})
let updatedPromise = betterPromise(p1, 10000);

async function resolver (){
    try {
      let response = await updatedPromise; // ✅ FIXED
      console.log(response); // "Promise resolved"
    } catch (err) {
      console.error("Error:", err.message); // if timeout
    }
   
}

resolver();