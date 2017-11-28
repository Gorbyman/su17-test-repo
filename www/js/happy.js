// Happy/Unhappy

let answer = ' Svara "Ja" eller "Nej"';
let happyPoint = 0;
let unhappyPoint = 0;
let userInput;


function question1(){

userInput = prompt('Fråga 1 av 6. Är du i ett bra förhållande?' + answer);
checkAnswer();
if (checkAnswer){
  question2()
}
else if (checkAnswer == false){
  question2()
}
else{
  alert('Inget svar är registrerat...' + answer);
  question1();
}
}

function question2(){
let userInput = prompt('Fråga 2 av 6. Har du något roligt fritidsintresse?' + answer);
if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
  happyPoint = happyPoint + 1;
  question3()
}
else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
  question3()
}
else{
  alert('Inget svar är registrerat...' + answer);
  question2();
}
}

function question3(){
let userInput = prompt('Fråga 3 av 6. Är du nöjd med ditt boende?' + answer);
if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
  happyPoint = happyPoint + 1;
  question4()
}
else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
  question4()
}
else{
  alert('Inget svar är registrerat...' + answer);
  question3();
}
}

function question4(){
let userInput = prompt('Fråga 4 av 6. Har du balans i din ekonomi?' + answer);
if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
  happyPoint = happyPoint + 1;
  question5()
}
else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
  question5()
}
else{
  alert('Inget svar är registrerat...' + answer);
  question4();
}
}

function question5(){
let userInput = prompt('Fråga 5 av 6. Känner du dig uppskattad av dina nära?' + answer);
if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
  happyPoint = happyPoint + 1;
  question6()
}
else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
  question6()
}
else{
  alert('Inget svar är registrerat...' + answer);
  question5();
}
}

function question6(){
let userInput = prompt('Fråga 6 av 6. Får du tillräckligt med sömn?' + answer);
if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
  happyPoint = happyPoint + 1;
}
else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
}
else{
  alert('Inget svar är registrerat...' + answer);
  question6();
}

if (happyPoint > unhappyPoint){
  $('#result').text('Du har ett lyckligt liv, fortsätt så!').removeClass('d-none');
}
else if (happyPoint == unhappyPoint){
  $('#result').text('Ditt liv är lagom, du har en balans mellan lyckligt och olyckligt').removeClass('d-none alert-success'). addClass('alert-primary');
}
else{
  $('#result').text('Det mesta i ditt liv suger. Ryck upp dig!').removeClass('d-none alert-success').addClass('alert-warning');
}
}


function checkAnswer(){
  if (userInput == 'Ja' || userInput == 'ja' || userInput == 'JA'|| userInput == '"Ja"'|| userInput == '"ja"'|| userInput == '"JA"' || userInput == 'Yes'|| userInput == '"yes"'|| userInput == 'Ok'|| userInput == 'ok'|| userInput == '"Ok"'|| userInput == '"ok"'|| userInput == 'OK'|| userInput == '"OK"'|| userInput == 'Jepp'){
    happyPoint = happyPoint + 1;
    return true;
  }
  else if (userInput == 'Nej' || userInput == 'nej' || userInput == 'NEJ' || userInput == '"Nej"' || userInput == '"nej"' || userInput == '"NEJ"' || userInput == 'Nix' || userInput == 'nix' || userInput == 'NIX' || userInput == 'Nepp'){
  unhappyPoint = unhappyPoint + 1;
  return false;
}
else{
  alert('Inget svar är registrerat...' + answer);
}
}


question1();
  
