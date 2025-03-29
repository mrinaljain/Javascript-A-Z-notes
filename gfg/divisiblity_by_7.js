let num1 = 654678;

const checkDivisibility = function (number) {
  let n = number.length;

  // base case
  if (number === 7 || number === 0) return true;
  if (number < 10) return false;
  
  // Extract the last digit (without using modulus)
  let lastDigit = number - Math.floor(number / 10) * 10;

  // Remove the last digit (without using modulus)
  let remainingNumber = (number - lastDigit) / 10;

  // Double the last digit
  let doubleLast = lastDigit * 2;

  console.log("Remaining Number:", remainingNumber);
  console.log("Double Last:", doubleLast);

  // Compute new number
  let newNumber = remainingNumber - doubleLast;

  // smallest possible operation

  return checkDivisibility(newNumber);
};

console.log(checkDivisibility(num1));
