let x  = 3.97;
console.log('x =',x);

// Avrundning, avrundar 
let rounded  = Math.round(x);
console.log('Rounded =',rounded);

// Floor, rundar alltid ner
let floored  = Math.floor(x);
console.log('Floored =',floored);

// Ceil, rundar alltid upp
let ceiled  = Math.floor(x);
console.log('Ceiled =',floored);

// Hitta största talet
let biggest  = Math.max(1, 2, 2.25, -3);
console.log('Math.max =',biggest);

// Hitta minsta talet
let smallest  = Math.min(1, 2, 2.25, -3);
console.log('Math.min =',smallest);

let y  = -3;

// Abs, konvertera till icke-negativt tal, absoluttal
console.log('Math.abs(-3) =',Math.abs(y));

// Math.pow, upphöjt till
console.log('Math.pow(3,4) =',Math.pow(3,4));
// eller
console.log(3 ** 4);

// Moduloräkning, beräkna resten
console.log('10 % 3 =', 10 % 3);
console.log('10 % 4 =', 10 % 4);

// Kolla om ett tal är jämt (=true) eller ojämnt (=false)
function even(x){
  return x % 2 == 0;
}

console.log('even(3) = ',even(3));
console.log('even(8) = ',even(8));

// Avrunda till exakt antal decimaler utan .toFixed() som ger en sträng tillbaka

let n = 6.37852983475981508109352;

// Old school-variant
function round(num,decimals){
  let factor = Math.pow(10,decimals);
  return Math.round(num * factor) / factor;
}

//Hipster-variant
function roundHipster(num,decimals){
  return num.toFixed(decimals) / 1; // Att dela med 1 tvingar JS att konvertera från sträng till nummer
}

console.log('round =',round(n,2));
console.log('roundHipster =',roundHipster(n,2));

