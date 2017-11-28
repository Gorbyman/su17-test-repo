let dogs = [
  'Fido',
  'Bixon',
  'Roger',
  'Lady',
  'Babe'
];
let number = 1;
// for ... of loop, iterera genom array
for(let dog of dogs){
  console.log(dog + ' är en dog, nummer ' + number);
  number++;
}

number = 1;
// klassisk for loop!
for(let i = 0; i < dogs.length; i++){
  console.log('For loopad dog',i , + number + ' = ' + dogs[i]);
  number++;
}