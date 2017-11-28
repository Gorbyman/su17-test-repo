let dogs = [
  'Fido',
  'Bixon',
  'Roger',
  'Lady',
  'Babe'
];

function renderDogs(){
  $('.dogs').empty();
  for(let dog of dogs){
    $('.dogs').append(`
      <li class="list-group-item">
        ${dog + ' är en fin jycke.'}
      </li>
    `);
  }
}

renderDogs();

$('#remove-first').click(function(){
  dogs.shift();
  renderDogs();
});

$('#remove-last').click(function(){
  dogs.pop();
  renderDogs();
});


$('#add-first').click(function(){
  dogs.unshift($('#new-dog').val());
  $('#new-dog').val('');
  renderDogs();
})

$('#add-last').click(function(){
  dogs.push($('#new-dog').val());
  $('#new-dog').val('');
  renderDogs();
})
