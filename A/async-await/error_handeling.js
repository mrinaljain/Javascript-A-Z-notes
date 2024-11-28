let p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      reject("Promise Rejected")
   }, 5000);
});



//! 1 First way to handel error using catch method
async function handlerone() {
   console.log("Handeling started");
   try {
      await p1;
   } catch (error) {
      console.log(error);
   } finally {
      console.log("Ye to chalegi hi sahi kuch bhi ho jaye");
   }

}


//! 2nd First way to handel error using try catch finally block
async function handlertwo() {
   console.log("Handeling started");

   await p1.catch((err) => { console.log(err); })
}

handlerone();


