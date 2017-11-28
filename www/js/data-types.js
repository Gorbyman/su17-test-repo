// Data-typer

// Stängar
let start = 'Variabel ';
let greeting = 'Hello there!';
console.log(greeting);

let bye = "Bye for now!";
console.log(bye);

// Addera strängar, concatenation
let allIHaveToSay = greeting + ' ' + bye;
console.log(allIHaveToSay);


// Nummer, både heltal och decimaltal
let numberOfBeersBar1 = 5;
let numberOfBeersBar2 = 1.5;
let totalNumberOfBeers = numberOfBeersBar1 + numberOfBeersBar2;
console.log('Antal druckna öl =',totalNumberOfBeers);


//Booleans
let thirsty = true;
let hungry = false;

// && = "och" (logisk operator)
let thirstyAndHungry = thirsty && hungry;

// || = "eller" (logisk operator)
let thirstyOrHungry = thirsty || hungry;

console.log(start + '"thirsty" =', thirsty);
console.log('Variabel "hungry" =', hungry);
console.log('Variabel "thirstyAndHungry" =', thirstyAndHungry);
console.log('Variabel "thirstyOrHungry" =', thirstyOrHungry);


let savedMoney = 4000;
let debts = 4000;
// Jämförelseoperatorer >, <, >=m <=, ==, !=
// Resultat av jämförelseoperatorer returnerar en boolean
let happy = savedMoney >= debts;
let equalMoneyAndDebts = savedMoney == debts; 
console.log(start + '"happy" =', happy);
console.log(start + '"equalMoneyAndDebts" =', equalMoneyAndDebts);
