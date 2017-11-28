let toBeTreated = [];
let beingTreated = [];
let areTreated = [];

function addToList(person){
  toBeTreated.push(person);
  logSickList();
  return toBeTreated;
}

$('#checkIn').click(function(){
  let patient = $('#newToList').val()
  if ($('#newToList').val() === ''){
    alert('Var vänlig fyll i ditt namn först.')
    return;
  }
  addToList($('#newToList').val());
  $('#treating').removeClass('d-none');
  console.log(toBeTreated);
})

$('#treating').click(function(){
  while(toBeTreated.length > 0){
    $('#treated').removeClass('d-none');

    let treatedPerson = toBeTreated.shift();
    beingTreated.push(treatedPerson);
    logSickList();
    break;
  }
  if (toBeTreated.length === 0){
    $('#sickLine').addClass('d-none');
  }
})

$('#treated').click(function(){
  while(beingTreated.length > 0){
    let treatedPerson = beingTreated.shift();
    areTreated.push(treatedPerson);
    logSickList();
    logTreatedList();
    break;
  }
})

function logSickList(){
  if (toBeTreated.length === 0){
    $('#sickLine').addClass('d-none');
    return;
  }
  else{
  $('.sickPeople').empty();
  }
  $('#sickLine').removeClass('d-none');
  for (let sick of toBeTreated){
    $('.sickPeople').append(`
      <li class="list-group-item">
        ${sick}
      </li>
    `)
  }
}

function logTreatedList(){
  $('.treatedPeople').empty();
  $('#treatedLine').removeClass('d-none');
  for (let treated of areTreated){
    $('.treatedPeople').append(`
      <li class="list-group-item">
        ${treated}
      </li>
    `)
  }
}



// till animation

/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
var beep = document.createElement('audio');
beep.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/heart_beep.mp3'
var PPath = document.getElementById('pulse') ,
    svg = document.getElementById('svg') , count = 15 , Pulse = new TimelineMax({repeat:-1});
for(var i=0;i<count;i++){
  var svgCln = PPath.cloneNode(true);
  TweenLite.set(svgCln,{stroke:'rgba(19,195,173,'+(count-i)*0.04+')'});
  svg.appendChild(svgCln);
}
var BL = PPath.cloneNode(true); svg.appendChild(BL); BL.setAttribute("class","");
TweenLite.set(PPath,{filter:'url(#glow)'});
Pulse.staggerFromTo(PPath,3.5,{drawSVG:'0% 0%'},{drawSVG:'100% 100%',ease:Power0.easeNone},0.04)
     .staggerFromTo('.myP',3.5,{drawSVG:'0% 3%'},{drawSVG:'100% 103%',ease:Power0.easeNone},0.04,0)
     .fromTo(BL,3.4,{drawSVG:'0%'},{drawSVG:'100%',ease:Power0.easeNone},0)
     .fromTo(BL,1.5,{opacity:0.05,strokeWidth:9},{strokeWidth:4,opacity:0.01},'-=1.5')
     .add(function(){Pulse.timeScale(5)},0.75)
     .add(function(){Pulse.timeScale(1)},2.6)
     .add(function(){beep.play()},0.75)
// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW 