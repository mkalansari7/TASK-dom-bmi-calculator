function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height /= 100; 
  let bmi = (weight / (height^2));
  alert(bmi);
  let bmiState = "";
  if (bmi < 18.5) {
    bmiState = "Underweight";
  } else if (bmi >=18.5 && bmi <= 24.9) {
    bmiState = "Healthy Weight";
  } else {
    bmiState = "Overweight";
  }
  alert(bmiState);


 
}
