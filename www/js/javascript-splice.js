let persons = [
  'Anna',
  'Beata',
  'Cecilia',
  'David',
  'Erik',
  'Fredrik'
  ];

console.log(persons);

// Add person after Beata (before index 2)
// .splice(index,numberOfItemsToRemove, itemToAdd, itemToAdd2 etc)
persons.splice(2,0,'Gabriel');
console.log('persons efter .splice() = ',persons);


// Remove Beata, the person at index 1
let removedPersons = persons.splice(1,1);
console.log('Array efter splice = ',persons);
console.log('Borttagen = ',removedPersons);

// Replace David, the person at index 4
let replacedPersons = persons.splice(3,1,'Berra');
console.log('Array efter utbyte', persons);
console.log('Utbytt person = ', replacedPersons);