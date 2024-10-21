function* genFun() {
  yield "one";

  console.log("step one");

  yield "two";

  console.log("step two");

  return "thhre";
}

// let gen = genFun();
// console.log(gen);

// gen.next();
// gen.next();
// gen.next();
// let ans = gen.next();

// console.log(ans);

for (item of genFun()) {
  console.log(item);
}

[...genFun()];
