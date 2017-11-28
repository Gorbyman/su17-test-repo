// while loop

let personUntreated = [
  'Anna', 
  'Bertil', 
  'Cecilia'
];

let personsTreated = [];
let personsLefttoTreat = [];

let co = 0;
while(personUntreated.length > co){
  console.log(personUntreated[co]);
  co++;
}

// Lägg över element från en array till en annan tills en (första) array är tom
while(personUntreated.length > 0){
  let personToTreat = personUntreated.shift();
  console.log('Treating: ', personToTreat)
  personsTreated.push(personToTreat);
  console.log('personsLefttoTreat: ', personUntreated);
}

