function bmiCalculator(weight, height) {
   let bmi;
   bmi = weight / height * height;
   let interpretation;
   if (bmi < 18.5)
      interpretation = "Your BMI is " + bmi + ", so you are underweight.";

   else if (18.5 >= bmi <= 24.9)
      interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";

   else if (bmi > 24.9)
      interpretation = "Your BMI is " + bmi + ", so you are overweight.";
   return interpretation;
}

var value = bmiCalculator(60, 20);

console.log(value);