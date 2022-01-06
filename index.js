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
  const bmi = (weight / (height ** 2));

  let gender = male ? "Male" : "Female"

  let bmiState;
  let bmiStateP;
  if (bmi < 18.5) {
    bmiState = "Underweight";
  } else if (bmi >=18.5 && bmi <= 24.9) {
    bmiState = "Healthy Weight";
  } else if (bmi>= 25 && bmi <= 29.9) {
    bmiState = "Overweight";
  } else {
    bmiState = "Above Obesity";
  }

  if (age < 24 ) {
    if (bmi < 18.5) {
      bmiStateP = "Underweight";
    } else if (bmi >=18.5 && bmi <= 24.9) {
      bmiStateP = "Healthy Weight";
    } else if (bmi>= 25 && bmi <= 29.9) {
      bmiStateP = "Overweight";
    } else {
      bmiStateP = "Above Obesity";
    }
  } else if (age < 34){
    if (bmi < 20.5) {
      bmiStateP = "Underweight";
    } else if (bmi >= 20.5 && bmi <= 26.9) {
      bmiStateP = "Healthy Weight";
    } else if (bmi>= 27 && bmi <= 31.9) {
      bmiStateP = "Overweight";
    } else {
      bmiStateP = "Above Obesity";
    }
  } else {
    if (bmi < 22.5) {
    bmiStateP = "Underweight";
  } else if (bmi >=22.5 && bmi <= 28.9) {
    bmiStateP = "Healthy Weight";
  } else if (bmi>= 29 && bmi <= 33.9) {
    bmiStateP = "Overweight";
  } else {
    bmiStateP = "Above Obesity";
  }
  }

  alert(`
  Weight: ${weight}
  Height: ${height}
  Age: ${age}
  Gender: ${gender}
  -----------
  BMI: ${bmi}
  BMI State: ${bmiState}
  BMI State Based on your age: ${bmiStateP}`);
  


 
}
