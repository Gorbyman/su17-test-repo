//  Akvarie
function volume(width,height,length){
  let size;
  width = width / 10;
  height = height / 10;
  length = length / 10;
  let totalLiters = width * height * length;
  let cost = totalLiters * 0.03;
  if (totalLiters < 10){
    size = 'ett litet akvarie';
  }
  else if (totalLiters < 20){
    size = 'ett normalstort akvarie';
  }
  else {
    size = 'inget akvarie utan en swimmingpool';
  }  
  return 'Ditt akvarie rymmer ' + totalLiters.toFixed(1) + ' liter. Det är ' + size + ' du ligger inne med. Du får punga upp med ' + cost.toFixed(2) + ' kronor för att fylla det.';
}

$('#calc').click(function(){
  let w = $('#width').val();
  let h = $('#height').val();
  let l = $('#length').val();
  let result = volume(w,h,l);
  $('#result').text(result).removeClass('d-none');
})


