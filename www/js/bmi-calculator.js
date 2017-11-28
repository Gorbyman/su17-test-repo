// Body Mass Index Calculator

let weight = prompt('Vad är din vikt? (kg)');
let height = prompt('Vad är din längd? (cm)');

height = height / 100;

let bmi = weight / (height * height);

alert('Din BMI är ' + bmi);