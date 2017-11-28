//  Drive
function avarageSp(trip,speed,breaks,breaklength){
  
  let tip;

  speedPerMinute = speed / 60;

  let averageSpeed = trip / speedPerMinute;
  let breakTime = breaks * breaklength;
  let totalTime = averageSpeed + breakTime;

  let hours = totalTime / 60;
  hours = Math.floor(hours);
  let minutes = totalTime - (hours * 60);  
  minutes = minutes.toFixed(0);

  if (speed < 50){
    tip = ' Testa att använda gaspedalen lite mer.';
    }
  else if (speed <= 110){
    tip = ' Du kör som en gud.';
    }
  else {
    tip = ' Det är inte Formel-1 nu, googla bromssträcka.';
    }
    if (hours > 0){
      return 'Det kommer att ta ' + hours + ' timmar och ' + minutes + ' minuter att köra. ' + tip;
    }
    else {
      return 'Det kommer att ta ' + minutes + ' minuter att köra. ' + tip;
    }
  }


$('#calc').click(function(){
  let t = $('#trip').val();
  let s = $('#speed').val();
  let b = $('#break').val();
  let bl = $('#breaklength').val();
  let result = avarageSp(t,s,b,bl);
  $('#result').text(result).removeClass('d-none');
})


