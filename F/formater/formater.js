let amount = 23482719.98;

const formater = new Intl.NumberFormat("hin-IN", {
  style: "currency",
  currency: "INR",
});


let formatedAmount = formater.format(amount);

console.log(formatedAmount);
