// console.log("Hello World");

var p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved...");
  }, 5000);
});

// resolving promise by .then
// p1.then((data) => {
//   console.log(data);
// });

async function createPromise() {
  let a = 20;
}

async function solve(){
let prm = await createPromise();
console.log(prm);
}
solve();
 
// console.log(result);
