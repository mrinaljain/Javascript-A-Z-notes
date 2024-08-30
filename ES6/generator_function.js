function* generatorFn() {
  console.log("This is generator function..!");

  yield 10;
  yield 20;
}

generatorFn().next().value;
console.log(generatorFn().next().value);
