// Body Mass Index Calculator


function bmi(weight,height){
  height = height / 100;

  let bmi = weight / (height * height);

  let weightClass;

  if (bmi < 18.5){
    weightClass = 'Ät lite mer god mat!';
  }
  else if (bmi < 25){
    weightClass = 'Bra vikt där!';
  }
  else if (bmi < 30){
    weightClass = 'Du är snygg som du är!';
  }
  else{
    weightClass = 'Det är kul med mat. Det är vackert i skogen också! Gå lite!';
  }
  return 'Din BMI är ' + bmi.toFixed(1) + '. ' + weightClass;
}


let w = prompt('Vad är din vikt? (kg)');
let h = prompt('Vad är din längd? (cm)');
alert(bmi(w,h));

alert('Kalla nu på din partner och låt hen fylla i samma sak!');

let w2 = prompt('Vad är din vikt? (kg)');
let h2 = prompt('Vad är din längd? (cm)');
alert(bmi(w2,h2));