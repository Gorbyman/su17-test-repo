let person = {
  name: 'Kalle',
  age: 25,
  gender: 'male',
  hobby: 'football',
  alive: true,
  'sparkar bra fotboll': false
};

/*
console.log('person all info = ', person)
console.log('person.name = ', person.name);
console.log('person.["name"] = ', person['name']);
console.log('person.alive = ', person.alive);
console.log("person.'[sparkar bra fotboll]' = ", person['sparkar bra fotboll']);
*/

for(let key in person){
  let val = person[key];
  console.log(key + ' = ' + val);
}



let realEmptyObj = {};
console.log('realEmptyObj = ', realEmptyObj);

// Lägg till egenskaper efter objekt är skapat
realEmptyObj.name = 'Now I have a name';
realEmptyObj['I like music'] = 'yes';
console.log('realEmptyObj = ', realEmptyObj);

// Byta egenskap efter objekt är skapat
realEmptyObj['I like music'] = 'no';
console.log('realEmptyObj efter byte = ', realEmptyObj);

// Ta bort egenskaper efter objekt är skapat
delete realEmptyObj.name;
console.log('realEmptyObj efter delete = ', realEmptyObj);