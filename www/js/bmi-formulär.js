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



$('#calc').click(function(){
  let w = $('#weight').val();
  let h = $('#height').val();
  let result = bmi(w,h);
  $('#result').text(result).removeClass('d-none');
})

