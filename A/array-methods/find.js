let menu = [
  { name: "Margerita", price: 500 },
  { name: "Pepperono", price: 452 },
  { name: "Veggie", price: 352 },
  { name: "Kalakhatta", price: 541 },
  { name: "Narangi", price: 544 },
];

let result = menu.find((item) => {
  return item.name === "Veggie";
});

console.log(result);
