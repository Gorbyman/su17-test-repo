let toDoList = []

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
  if(toDoList.length > 0){
  toDoList.shift();
  return toDoList;
  }
  else{
    alert('Lägg till något till listan först');
  }
}

function removeFromListByIndex(removeByIndex){
  if (removeByIndex < 0 || removeByIndex > toDoList.length){
    alert('Felaktigt index');
    return;
  }
  let removedFromList = toDoList.splice(removeByIndex,1);
  logTodoListVer2();
  if(doneList.length > 0){
    logDoneList();
  }
  else if(doneList.length === 0){
    $('#done').addClass('d-none');
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
      logTodoListVer2();
      return(toDoList);
    }
  }
}

function moveToBottom(moveDown){
  for (let i = 0; i < toDoList.length; i++){
    if (moveDown == toDoList[i]){
      removeFromListByName(moveDown);
      addToList(moveDown);
      logTodoListVer2();
      return(toDoList);
    }
  }
}

function moveDown(downOne){
  for (let i = 0; i < toDoList.length; i++){
    if (downOne == toDoList[i]){
      let replacedItem = toDoList.splice(i,1);
      toDoList.splice(i + 1,0,replacedItem);
      logTodoListVer2();
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
      toDoList.splice(i - 1,0,replacedItem);
      logTodoListVer2();
      return(toDoList);
    }
  }
}

function logTodoList(){
  $('.dogs').empty();
  $('#result').removeClass('d-none');
  for (let i = 0; i < toDoList.length; i++){
    $('#result').text(toDoList[i]);
  }
}

function logTodoListVer2(){
  $('.todoList').empty();
  if(toDoList.length > 0){
    $('#result').removeClass('d-none');
    $('#remove').removeClass('d-none');
    $('#removeFirst').removeClass('d-none');
    $('#removeByIndex').removeClass('d-none');
    $('#removeByName').removeClass('d-none');
    $('#removeAndMove').removeClass('d-none');
    $('.all-done').addClass('d-none');
    $('.still-stuff-todo').removeClass('d-none');
  }
  else if(toDoList.length === 0){
    $('#result').addClass('d-none');
    $('#removeByIndex').addClass('d-none');
    $('#removeByName').addClass('d-none');
    $('#removeAndMove').addClass('d-none');
  }

  for (let listItem of toDoList){
    let removeThis = $(`
      <button type="button" class="btn btn-sm btn-danger mt-2 mb-1 float-right removeThis"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      `);
    removeThis.data('listInfo', listItem);

    let downOne = $(`
      <button type="button" class="btn btn-sm btn-primary mt-2 mb-1 mr-1 float-right moveDown"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
      `);
    downOne.data('listInfo', listItem);
    
    let toBottom = $(`
      <button type="button" class="btn btn-sm btn-primary mt-2 mb-1 mr-1 float-right moveToBottom"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
      `);
    toBottom.data('listInfo', listItem);

    let toTop = $(`
      <button type="button" class="btn btn-sm btn-primary mt-2 mb-1 mr-1 float-right moveToTop"><i class="fa fa-angle-double-up" aria-hidden="true"></i></button>
      `);
    toTop.data('listInfo', listItem);

    let upOne = $(`
      <button type="button" class="btn btn-sm btn-primary mt-2 mb-1 mr-1 float-right moveUp"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
      `);
    upOne.data('listInfo', listItem);

    let itsDone =$(`
      <button type="button" class="btn btn-sm btn-success mt-2 mr-1 mb-1 float-right removeAndMove"><i class="fa fa-check" aria-hidden="true"></i></button>
      `);
    itsDone.data('listInfo', listItem);

    let newLi = $(`
      <li class="list-group-item inToDoList">   
        ${listItem} 
      </li>
    `);
    $('.todoList').append(newLi);
    $('.inToDoList').last().append(removeThis);
    $('.inToDoList').last().append(downOne);
    $('.inToDoList').last().append(toBottom);
    $('.inToDoList').last().append(toTop);
    $('.inToDoList').last().append(upOne);
    $('.inToDoList').last().append(itsDone);
  } 
}

function logDoneList(){
  if(toDoList.length == 0){
    $('.all-done').removeClass('d-none');
    $('.still-stuff-todo').addClass('d-none');
  }
  $('.doneList').empty();
  $('#done').removeClass('d-none');
  for (let listItem of doneList){
    $('.doneList').append(`
      <li class="list-group-item">
        ${listItem}
      </li>
    `);
    $('.doneList li').css('text-decoration', 'line-through');
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

/*$('#remove').click(function(){
  removeFromBottomOfList();
  logTodoListVer2();
})*/

$(document).on('click', "#remove", function(){
  removeFromBottomOfList();
  logTodoListVer2();
});



$('#removeFirst').click(function(){
  removeFromTopOfList();
  logTodoListVer2();
})

$('.removeAll').click(function(){
  let areYouSure = confirm('Är du säker? Alla uppgifter kommer att raderas.')
  if(areYouSure){
    while(toDoList.length > 0){
    removeFromTopOfList();
    }
  }
  logTodoListVer2();
  $('#result').addClass('d-none');
})

/* Blir konstig bugg att ramen dyker upp när man raderar från att-göra-listan
$('.removeAllDone').click(function(){
  let areYouSure = confirm('Är du säker? Alla uppgifter kommer att raderas.')
  if(areYouSure){
    $('#done').empty();
    $('#done').addClass('d-none');
  }
  logTodoListVer2();
})*/

$('#removeByIndex').click(function(){
  let i = ($('#newToList').val());
  if(isNaN(i)){
    return;
  }
  i = i / 1 -1;
  removeFromListByIndex(i);
})


$('#removeByName').click(function(){
  let x = ($('#newToList').val());
  removeFromListByName(x);
})

$('#removeAndMove').click(function(){
  let r = ($('#newToList').val());
  removeFromListAndAddToDone(r);
});

$(document).on('click', '.removeAndMove', function(){
  let me = $(this);
  let info = me.data('listInfo');
  removeFromListAndAddToDone(info);
});

$(document).on('click', '.moveToTop', function(){
  let me = $(this);
  let info = me.data('listInfo');
  moveToTop(info);
});

$(document).on('click', ".moveToBottom", function(){
  let me = $(this);
  let info = me.data('listInfo');
  moveToBottom(info);
});

$(document).on('click', ".moveDown", function(){
  let me = $(this);
  let info = me.data('listInfo');
  moveDown(info);
});

$(document).on('click', '.moveUp', function(){
  let me = $(this);
  let info = me.data('listInfo');
  moveUp(info);
});

$(document).on('click', '.removeThis', function(){
  let me = $(this);
  let info = me.data('listInfo');
  console.log(info);
  removeFromListByName(info);
});

"use strict";

window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( callback ) { window.setTimeout(callback, 1000 / 60 ); }
})();

(function() {
  var settings = {
    NUM_PARTICLES : 10,
    DISTANCE_T    : 0,
    RADIUS        : 1,
    OPACITY       : 1,
    SPEED_X       : 0.8,
    SPEED_Y       : 0.6,
    AMPLITUDE     : 110
  };
  
  var COLOURS    = ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
      bounds     = {},
      particles  = [],
      random     = Math.random,
      sqrt       = Math.sqrt,
      PI         = Math.PI,
      ctx, W, H, stats;
  
  function Particle() {
    this.x      = random() * bounds.right;
    this.y      = random() * bounds.bottom;
    this.xspeed = random() * settings.SPEED_X;
    this.yspeed = random() * settings.SPEED_Y;
    this.radius = settings.RADIUS;
    this.colour = COLOURS[ ~~(random() * COLOURS.length)];
  }
  
  var bindEvents = function() {
    window.addEventListener('resize', resize, false);
  };
  
  var resize = function() {
    W = window.innerWidth;
    H = window.innerHeight;
    ctx.canvas.width  = W;
    ctx.canvas.height = H;
    bounds.top      = 100;
    bounds.right    = W - 100;
    bounds.bottom   = H - 200;
    bounds.left     = 100;
  };
  
  var draw = function() {
    render();
    requestAnimFrame(draw);
  };
  
  var update = function (p) {
    p.x += p.xspeed;
    p.y += p.yspeed;
    
    if (p.x > bounds.right) {
      p.x = bounds.right;
      p.xspeed *= -1;
    }
    if (p.x < bounds.left) {
      p.x = bounds.left;
      p.xspeed *= -1;
    }
    if (p.y > bounds.bottom) {
      p.y = bounds.bottom;
      p.yspeed *= -1;
    }
    if (p.y < bounds.top) {
      p.y = bounds.top;
      p.yspeed *= -1;
    }
  };
  
  var render = function() {
    ctx.beginPath();
    ctx.globalCompositeOperation = "source-over";
    ctx.rect(0, 0 , W, H);
    ctx.fillStyle = "rgba(0,0,0,.3)";

    ctx.fill();
    ctx.closePath();
    
    ctx.globalCompositeOperation = "lighter";
        
    for (var i = 0; i < particles.length; i += 1) {
      var p = particles[i];
      
      ctx.beginPath();
      ctx.globalAlpha = settings.OPACITY;
      ctx.fillStyle = p.colour;
      ctx.arc(p.x, p.y, p.radius, PI * 2, false);
      ctx.fill();
      ctx.closePath();
      
      for (var j = 0; j < particles.length; j += 1) {
        var pp = particles[j],
            yd = pp.y - p.y,
            xd = pp.x - p.x,
            d  = sqrt(xd * xd + yd * yd);
        
        if ( d < settings.DISTANCE_T ) {
          ctx.beginPath();
          ctx.globalAlpha = (settings.DISTANCE_T - d) / (settings.DISTANCE_T - 0);
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          
          if ( settings.AMPLITUDE ) {
            ctx.bezierCurveTo(
              p.x,
              p.y - random() * settings.AMPLITUDE,
              pp.x,
              pp.y + random() * settings.AMPLITUDE,
              pp.x,
              pp.y
            );
          } else {
            ctx.lineTo(pp.x, pp.y);
          }
          
          ctx.strokeStyle = p.colour;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.closePath();
          
        }
      }
      
      update(p);
      
    }
  };
  
  var updateSpeed = function( x, y, attr ) {
    var speed = arguments[0] ? x : y;
    for (var i = 0; i < settings.NUM_PARTICLES; i += 1) {
      var ns = random() * speed;
      particles[i][attr] = particles[i][attr] > 0 ? ns : -ns;
    }
  };
  
  var updateRadius = function( value ) {
    for (var i = 0; i < settings.NUM_PARTICLES; i += 1) {
      particles[i].radius = value;
    }
  };
  
  var init = function() {
    ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
  
    bindEvents();
    resize();
    
    for (var i = 0; i < settings.NUM_PARTICLES; i += 1) {
      particles.push( new Particle() );
    }
    
    draw();
  };
  
  window.onload = init;
  
  var GUI = new dat.GUI();
  
  GUI.add(settings, 'NUM_PARTICLES')
    .min(2)
    .max(200)
    .step(1)
    .name("# Particles")
    .onFinishChange(function( num ){
      var l = particles.length;
      if ( num < l ) {
        var diff = (l - num);
        particles.splice( 1, diff );
      }
    
      if ( num > l ) {
        var diff = (num - l);
        for (var i = 0; i < diff; i += 1) {
          particles.push( new Particle() );
        }
      }
    });
  
  GUI.add(settings, 'DISTANCE_T').min(0)
    .max(200)
    .step(10)
    .name("Distance");
  
  GUI.add(settings, 'RADIUS')
    .min(0)
    .max(10)
    .step(1)
    .name("Radius")
    .onFinishChange(function( value ) {
      updateRadius( value );
    });
  
  GUI.add(settings, 'SPEED_X')
    .min(0)
    .max(20)
    .name("X speed")
    .onFinishChange(function( value ) {
      updateSpeed( value, false, "xspeed");
    });
  
  GUI.add(settings, 'SPEED_Y')
    .min(0)
    .max(20)
    .name("Y speed")
    .onFinishChange(function( value ) {
      updateSpeed( false, value, "yspeed");
    });
  
  GUI.add(settings, 'AMPLITUDE')
    .min(0)
    .max(20)
    .step(1)
    .name("Amplitude");
  
  GUI.close();
  
})(); 
      
      
      var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");



var background = new Image();
background.src = "http://mytime-magazine.com/img/bg.jpg";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}




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