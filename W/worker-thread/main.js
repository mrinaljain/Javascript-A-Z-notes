let btn1 = document.getElementsByClassName("btn-1");
let btn2 = document.getElementsByClassName("btn-2");

const worker = new Worker("./worker.js");

btn1[0].addEventListener("click", () => {
  worker.postMessage("");

  worker.onMessage = (e) => {
    console.log("Resolved..");
  };
});

btn2[0].addEventListener("click", () => {
  console.log("Light task");
});
