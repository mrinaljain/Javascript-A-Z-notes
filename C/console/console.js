console.log("Hello world..!");

console.warn("This is a warning");

console.error("This is an error");

console.info("This is some information inside console");

user = {
  name: "username",
  lastName: "lastName",
};

console.table(user);


function a(x = "Hello") {
  function b(y = "World..!") {
    console.log(`x + y`);
    console.trace();
  }
  b();
}
a();



// Group Logs;

console.group("Console Group");
console.log("Item : 1");
console.log("Item : 2");
console.groupEnd();

console.time("Ended");
for (var i = 0; i <= 9; i++) {
  console.timeLog("Ended");
}
setTimeout(() => {
  console.timeEnd("Ended");
}, 10000);
