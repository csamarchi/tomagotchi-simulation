// Tamagotchi
//
// Created by Christine Samarchi



//Global Variables
let ageHealth = $('#age').val()
let time = 0;
let healthBarsMin = 0
let healthBarsMax = 10
let timerInterval = 5000

let timerArray = []


//Name Functions
$('#nameButton').on('click', () => {
  const $name = $('input').val();
  console.log($name);
  giveName($name)
  startTamagotchi()
})

const giveName = (inputValue) => {
  const $div = $('<div/>').addClass('greeting');
  $div.append('<h3>' + 'Hi ' + inputValue + ' !' + '</h3>');
  $('.home').append($div);
}



//Min & Max Function
function checkMinAndMax(healthBar) {
  if (healthBar.val() <= healthBarsMin) {
    healthBar.val(healthBarsMin)
  }
  if (healthBar.val() >= healthBarsMax) {
    healthBar.val(healthBarsMax)
  }
}


//Button click event listeners
$('#play').on('click', function() {
  incrementHealthBar($('#mood'))
  checkMinAndMax($('#mood'))
  $('.pet').velocity('transition.bounceUpIn');
  $('.pet').velocity('transition.bounceDownIn', 3000);
})

$('#feed').on('click', function() {
  incrementHealthBar($('#hunger'))
  checkMinAndMax($('#hunger'))
  $('.pet').velocity('transition.bounceUpIn');
})

$('#lights').on('click', function() {
  incrementHealthBar($('#sleep'))
  checkMinAndMax($('#sleep'))
  $('.eyes').velocity('transition.shrinkOut');
  $('.eyes').velocity('transition.shrinkIn');
})


//Animations
$('.pet').velocity('transition.bounce', 200);
$('.pet').velocity('transition.bounceUpIn');


//Utility Functions
function incrementHealthBar(healthBar) {
  let health = healthBar.val()
  health++
  healthBar.val(health)
}

function decrementHealthBar(healthBar) {
  let health = healthBar.val()
  health--
  healthBar.val(health)
}

function incrementAge() {
  let age = $('#age').val();
  age++;
  $('#age').val(age);
}

//Timer
const setTimer = (healthBar) => {

  const timer = setInterval(() => {

    if ($('#hunger').val() === 0 || $('#mood').val() === 0 || $('#sleep').val() === 0) {
      alert('GAME OVER')
      invalidateTimerArray()
    }

    decrementHealthBar(healthBar)
    checkMinAndMax(healthBar);
  }, timerInterval)

  timerArray.push(timer)
}

//Age Timer
const ageTimer = (healthBar) => {

  const timer = setInterval(() => {
    child()
    adult()
    elder()
    time++;

    incrementAge(healthBar)

    if (time === 40) {
      clearInterval(timer);
      console.log('game over');
      alert('CONGRATS! You lived a fullfilling life.')
      invalidateTimerArray()
    }
  }, 1000)

  timerArray.push(timer)
}


function startTamagotchi() {
  setTimer($('#mood'));
  setTimer($('#sleep'));
  setTimer($('#hunger'));
  ageTimer($('#age'));
}


function invalidateTimerArray() {
  for (let timer of timerArray) {
    clearInterval(timer)
  }
}


//Life Stages Functions
function child() {
  if ($('#age').val() === 10) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.pet').css({
      'width': '300px',
      'height': '250px',
      'left': '50%',
      'top': '60%'
    })
  }
}

function adult() {
  if ($('#age').val() === 20) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.head').css({
      'background': 'blue'
    });
    $('.body').css({
      'background': 'blue'
    });
    $('.pet').css({
      'width': '350px',
      'height': '300px',
      'left': '40%',
      'top': '45%'
    })
  }
}

function elder() {
  if ($('#age').val() === 30) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.pet').css({
      'width': '280px',
      'height': '240px',
      'left': '50%',
      'top': '60%'
    })
    $('.head').css({
      'background': 'gray'
    });
    $('.body').css({
      'background': 'gray'
    });
    $('.eyes span').css({
      'width': '10%',
      'height': '10%'
    });
  }
}


// ===================================
// Start Program
// ===================================


//startTamagotchi()
