const res = document.getElementById("resolve"); 
const rej = document.getElementById("reject"); 

let p2 = new Promise((resolve , reject) => { resolve("Promise Resolved")})


res.addEventListener("click", () => {
   p2.then((data) => { console.log(data);});
});



async function rejecte(params) {
   throw Error("rejected");
}

