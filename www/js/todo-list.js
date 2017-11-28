let toDoList = [];

function addToList(newToDo){
  toDoList.push(newToDo);
  return toDoList;
}

/*addToList('Bettan');
addToList('Folke');
addToList('Ernst');
addToList('Gorby');*/

function addToTopOfList(firstToDo){
  toDoList.unshift(firstToDo);
  return toDoList;
}

function removeFromBottomOfList(){
  if(toDoList.length > 0){
  toDoList.pop();
  return toDoList;
  }
  else{
    alert('Lägg till något till listan först');
  }
}

function removeFromTopOfList(){
  console.log('innan');
  if(toDoList.length > 0){
    console.log('efter');
  toDoList.shift();
  return toDoList;
  }
  else{
    alert('Lägg till något till listan först');
  }
}

function removeFromListByIndex(removeByIndex){
  if (removeByIndex < 0){
    return;
  }
  let removedFromList = toDoList.splice(removeByIndex,1);
  // console.log('Removed from list =' + removedFromList); // testa med [0] för att inte få en array tillbaka
  logTodoListVer2();
  if(doneList.length > 0){
    logDoneList();
  }
  return removedFromList;
}

function removeFromListByName(removeByName){
  for(let i = 0; i < toDoList.length; i++){
    if (toDoList[i] == removeByName){
      removeFromListByIndex(i);
      return toDoList[i];
    }
  }
}

let doneList = [];

function removeFromListAndAddToDone(addToDone){
  for (let i = 0; i < toDoList.length; i++){
    if (addToDone == toDoList[i]){
      doneList.push(addToDone);
      removeFromListByName(addToDone);
      return doneList;
    }
  }
}

function moveToTop(moveUp){
  for (let i = 0; i < toDoList.length; i++){
    if (moveUp == toDoList[i]){
      removeFromListByName(moveUp);
      addToTopOfList(moveUp);
      return(toDoList);
    }
  }
}

function moveToBottom(moveDown){
  for (let i = 0; i < toDoList.length; i++){
    if (moveDown == toDoList[i]){
      removeFromListByName(moveDown);
      addToList(moveDown);
      return(toDoList);
    }
  }
}

function moveDown(downOne){
  for (let i = 0; i < toDoList.length; i++){
    if (downOne == toDoList[i]){
      if (i == 0){
        return;
      }
      let replacedItem = toDoList.splice(i,1);
      console.log(replacedItem + ' är borttagen, ' + toDoList + ' är listan')
      toDoList.splice(i + 1,0,replacedItem);
      return(toDoList);
    }
  }
}

function moveUp(upOne){
  for (let i = 0; i < toDoList.length; i++){
    if (upOne == toDoList[i]){
      if (i == 0){
        return;
      }
      let replacedItem = toDoList.splice(i,1);
      console.log(replacedItem + ' är borttagen, ' + toDoList + ' är listan')
      toDoList.splice(i - 1,0,replacedItem);
      console.log(toDoList + ' efter införande');
      return(toDoList);
    }
  }
}

function logTodoList(){
  $('.dogs').empty();
  $('#result').removeClass('d-none');
  for (let i = 0; i < toDoList.length; i++){
    console.log(toDoList[i]);
    $('#result').text(toDoList[i]);
  }
}

function logTodoListVer2(){
  $('.todoList').empty();
  $('#result').removeClass('d-none');
  $('#remove').removeClass('d-none');
  $('#removeFirst').removeClass('d-none');
  $('#removeAll').removeClass('d-none');
  $('#removeByIndex').removeClass('d-none');
  $('#indexForm').removeClass('d-none');
  $('#removeByName').removeClass('d-none');
  $('#nameForm').removeClass('d-none');
  $('#removeAndMove').removeClass('d-none');
  $('#moveToTop').removeClass('d-none');
  $('#moveToBottom').removeClass('d-none');
  $('#moveDownOne').removeClass('d-none');
  $('#moveUpOne').removeClass('d-none');
  for (let listItem of toDoList){
    $('.todoList').append(`
      <li class="list-group-item">
        ${listItem}
      </li>
    `);
  } 
}

function logDoneList(){
  $('.doneList').empty();
  $('#result').removeClass('d-none');
  for (let listItem of doneList){
    $('.doneList').append(`
      <li class="list-group-item">
        ${listItem}
      </li>
    `);
  }
  
}

function askForItem(){
  let newToDo = prompt('Lägg till något till listan!');
  addToList(newToDo);
}


$('#add').click(function(){
  let a = ($('#newToList').val());
  if(a === ''){
    return;
  }
  addToList(a);
  logTodoListVer2();
})

$('#addFirst').click(function(){
  let a = ($('#newToList').val());
  if(a === ''){
    return;
  }
  addToTopOfList(a);
  logTodoListVer2();
})

$('#remove').click(function(){
  removeFromBottomOfList();
  logTodoListVer2();
})

$('#removeFirst').click(function(){
  removeFromTopOfList();
  logTodoListVer2();
})

$('#removeAll').click(function(){
  let areYouSure = confirm('Är du säker? Alla uppgifter kommer att raderas.')
  if(areYouSure){
    while(toDoList.length > 0){
    removeFromTopOfList();
    }
  }
  logTodoListVer2();
  $('#result').addClass('d-none');
})

$('#removeByIndex').click(function(){
  let i = (($('#indexForm').val()) / 1 - 1);
  removeFromListByIndex(i);
})


$('#removeByName').click(function(){
  let x = ($('#nameForm').val());
  removeFromListByName(x);
})

$('#removeAndMove').click(function(){
  let r = ($('#nameForm').val());
  removeFromListAndAddToDone(r);
})

$('#moveToTop').click(function(){
  let r = ($('#nameForm').val());
  moveToTop(r);
})

$('#moveToBottom').click(function(){
  let r = ($('#nameForm').val());
  moveToBottom(r);
})

$('#moveDownOne').click(function(){
  let r = ($('#nameForm').val());
  moveDown(r);
})

$('#moveUpOne').click(function(){
  let r = ($('#nameForm').val());
  moveUp(r);
})


/* gammal
let toDoList = [];

function addToList(newToDo){
  toDoList.push(newToDo);
  return toDoList;
}

addToList('Bettan');
addToList('Folke');
addToList('Ernst');
addToList('Gorby');

function addToTopOfList(firstToDo){
  toDoList.unshift(firstToDo);
  return toDoList;
}

function removeFromBottomOfList(){
  toDoList.pop();
  return toDoList;
}

function removeFromTopOfList(){
  toDoList.shift();
  return toDoList;
}

function removeFromListByIndex(removeByIndex){
  if (removeByIndex < 0){
    return;
  }
  let removedFromList = toDoList.splice(removeByIndex,1);
  // console.log('Removed from list =' + removedFromList); // testa med [0] för att inte få en array tillbaka
  return removedFromList;
}

function removeFromListByName(removeByName){
  for(let i = 0; i < toDoList.length; i++){
    if (toDoList[i] == removeByName){
      removeFromListByIndex(i);
      return toDoList[i];
    }
  }
}

let doneList = [];

function removeFromListAndAddToDone(addToDone){
  for (let i = 0; i < toDoList.length; i++){
    if (addToDone == toDoList[i]){
      doneList.push(addToDone);
      removeFromListByName(addToDone);
      console.log(doneList + ' =done efter add');
      console.log(toDoList + ' =todo efter remove')
      return doneList
      ;
    }
  }
}

function moveToTop(moveUp){
  for (let i = 0; i < toDoList.length; i++){
    if (moveUp == toDoList[i]){
      removeFromListByName(moveUp);
      addToTopOfList(moveUp);
      return(toDoList);
    }
  }
}

function moveToBottom(moveDown){
  for (let i = 0; i < toDoList.length; i++){
    if (moveDown == toDoList[i]){
      removeFromListByName(moveDown);
      addToList(moveDown);
      return(toDoList);
    }
  }
}

function moveDown(downOne){
  for (let i = 0; i < toDoList.length; i++){
    if (downOne == toDoList[i]){
      if (i == 0){
        return;
      }
      let replacedItem = toDoList.splice(i,1);
      console.log(replacedItem + ' är borttagen, ' + toDoList + ' är listan')
      toDoList.splice(i + 1,0,replacedItem);
      return(toDoList);
    }
  }
}

function moveUp(upOne){
  for (let i = 0; i < toDoList.length; i++){
    if (upOne == toDoList[i]){
      if (i == 0){
        return;
      }
      let replacedItem = toDoList.splice(i,1);
      console.log(replacedItem + ' är borttagen, ' + toDoList + ' är listan')
      toDoList.splice(i - 1,0,replacedItem);
      console.log(toDoList + ' efter införande');
      return(toDoList);
    }
  }
}

function logTodoList(){
  $('.todoList').empty();
  $('#result').removeClass('d-none');
  for (let i = 0; i < toDoList.length; i++){
    console.log(toDoList[i]);
    $('#result').text(toDoList[i]);
  }
}

function logTodoListVer2(){
  // let result = '';
  if(toDoList.length === 0){
    $('#result').addClass('d-none');
  }
  $('.todoList').empty();
  $('#result').removeClass('d-none');
  for (let listItem of toDoList){
    console.log(listItem + ' for of loopad');
    $('.todoList').append(`
      <li class="list-group-item">
        ${listItem}
      </li>
    `);
  }
  
}

function askForItem(){
  let newToDo = prompt('Lägg till något till listan!');
  addToList(newToDo);
}

// askForItem();


$('#add').click(function(){
  let a = ($('#newToList').val());
  if(a === ''){
      return;
    }
  addToList(a);
  logTodoListVer2();
})

$('#addFirst').click(function(){
  let a = ($('#newToList').val());
  addToTopOfList(a);
  logTodoListVer2();
})


$('#remove').click(function(){
  removeFromBottomOfList();
  logTodoListVer2();
})

$('#removeFirst').click(function(){
  removeFromTopOfList();
  logTodoListVer2();
})
*/