let pets = [
  'Boris',
  'Moxie',
  'Fido',
  'Bixon',
  'Lassie',
  'Findus',
  'Chili',
  'Lady',
  'Roger'
];

for (let pet of pets){
  console.log(pet);
  if (pet == 'Lassie'){
    console.log('Doesn\'t get any better!');
    break;
  }
}


for (let pet of pets){
  if (pet == 'Fido'){
    // fortsätt till nästa loopiteration utan att fullfölja resten av denna
    console.log('Skipped bad dog!')
    continue;
  }
  console.log(pet);
}