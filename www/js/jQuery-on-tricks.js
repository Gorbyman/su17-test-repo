/*
$('.fine-list li').click(function(){
  alert('You clicked me!');
});

// Funkar inte eftersom den är körd efter klick är pålagt
$('ul').append('<li>Sak 4</li>');
*/

// Med on funkar eventet även om elementet blir skapat dynamiskt efter att sidan laddats
$(document).on('click', ".fine-list li", function(){
  alert("You clicked me!");
});

$('ul').append('<li>Sak 4</li>');