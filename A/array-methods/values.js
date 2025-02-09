// array.values() returns an iterable which helps us to iterate over array.

const arr = ["22", "55", "lolo", "koko"];

const iterable = arr.values();

for (const element of iterable) {
  console.log(element);
}
