// Deklarera array och tilldela värden (element)

let persons = [
  'Anna',
  'Pelle',
  'Erik',
  'Beata',
  'Cecilia'
];

console.log(persons);
console.log(persons[0]); // => Anna
console.log(persons[2]); // => Erik

// Addera till array
// .push adderar element/item i slutet på array
persons.push('Fredrik');
console.log('Ny array efter .push = ',persons);

// .unshift adderar element/item i början på array
persons.unshift('Maria');
console.log('Ny array efter .unshift = ',persons);

// Ta bort från array
// .pop tar bort element/item i slutet på array
let removedItem = persons.pop();
console.log('Borttaget element med .pop = ', removedItem);
console.log('Ny array efter .pop = ',persons);

// .shift tar bort element/item i slutet på array
removedItem = persons.shift();
console.log('Borttaget element med .shift =', removedItem);
console.log('Ny array efter .shift =',persons);
