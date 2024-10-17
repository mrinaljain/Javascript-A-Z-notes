// let is block scopped
// let can not be re-declared
// let can be re - assigned
// let can be declared withought assignment
// [same-name] same naam se var hai pehle to let declare NAHI kr sakte hai override ho jayega

// var a = 20;
// console.log(a);
let a;
function aFunction() {
   let a = "insider";
   console.log(a);
}
a = 20;

{
   a = 30;
}
aFunction();
console.log(a);