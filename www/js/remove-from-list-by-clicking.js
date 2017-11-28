let pets = [
    {name: 'Fido', species: 'dog'},
    {name: 'Garfield', species: 'cat'},
    {name: 'Jumbo', species: 'elephant'}
];

// Med on funkar eventet även om elementet blir skapat dynamiskt efter att sidan laddats
$(document).on('click', ".pet-list li", function(){
  // Konvertera this till jQuery-element
  let me = $(this);
  //me.hide(1500);
  //me.show(2000);
  let pet = me.data('pet');
  let index = pets.indexOf(pet);
  console.log(index);
  pets.splice(index,1);
  console.log(pets);
  renderPets();
});

function renderPets(){
  $('pet-list').empty();
  for(let pet of pets){
    let newLi = $(`
      <li>
        ${pet.name} is a ${pet.species}
      </li>
      `)
    newLi.data('pet', pet);
    $('.pet-list').append(newLi);
  }
}

renderPets();