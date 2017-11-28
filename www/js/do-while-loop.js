let name;


do {
  name = prompt('Vad heter du?');
} while (name == '');


do {
  name = prompt('Vad heter du?');
  if (name != ''){
    break;
  }
} while (true);