
//? 1. Normal break statement

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}


//? 2. Using Return statement in loop

for (let item of arr) {
  if (item === val) return "Found!";
}

//? 3. Using labels

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}

// ? 4. throw Exception

try {
  for (let i = 0; i < 10; i++) {
    if (i === 5) throw new Error("Abort loop");
    console.log(i);
  }
} catch (e) {
  console.log("Loop aborted");
}