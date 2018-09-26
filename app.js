// Tamagotchi
//
// Created by Christine Samarchi



//Global Variables
let ageHealth = $('#age').val()
let time = 0;
let healthBarsMin = 0
let healthBarsMax = 10
let timerInterval = 5000


//Min & Max Function
function checkMinAndMax(healthBar) {
  if (healthBar.val() <= healthBarsMin) {
    healthBar.val(healthBarsMin)
  }
    if (healthBar.val() >= healthBarsMax) {
    healthBar.val(healthBarsMax)
  }
}

//Created Game Over Functions
function checkHunger(healthBar) {
  if ($('#hunger').val() === 0) {
    console.log('hunger game over');
    alert('GAME OVER')
  }
}

function checkEnergy(healthBar) {
  if ($('#sleep').val() === 0) {
    console.log('energy game over');
    alert('GAME OVER')
  }
}

function checkMood(healthBar) {
  if ($('#mood').val() === 0) {
    //console.log('your pet killed himself');
    alert('GAME OVER')
  }
}


//Name Functions
$('#nameButton').on('click', () => {
  const $name = $('input').val();
  console.log($name);
  giveName($name)
})

const giveName = (inputValue) => {
  const $div = $('<div/>').addClass('greeting');
  $div.append('<h3>' + 'Hi ' + inputValue + ' !' + '</h3>');
  $('.home').append($div);
}

//Button click event listeners
$('#play').on('click', function() {
  incrementHealthBar($('#mood'))
  checkMinAndMax($('#mood'))
  $('.pet').velocity('transition.bounceUpIn');
  $('.pet').velocity('transition.bounceDownIn');
})

$('#feed').on('click', function() {
  incrementHealthBar($('#hunger'))
  checkMinAndMax($('#hunger'))
})

$('#lights').on('click', function() {
  incrementHealthBar($('#sleep'))
  checkMinAndMax($('#sleep'))
  $('.eyes').velocity('transition.shrinkOut');
  $('.eyes').velocity('transition.shrinkIn');
})


//Animations
$('.pet').velocity('transition.bounceDownIn');
$('.pet').velocity('transition.bounceUpIn');
//$('.eyes').velocity('transition.shrinkOut');


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
      clearInterval(timer);
    }

    decrementHealthBar(healthBar)
    checkMinAndMax(healthBar);
}, timerInterval)
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
      alert('GAME OVER')
    }
  }, 1000)

}


function startTamagotchi() {
  setTimer($('#mood'));
  setTimer($('#sleep'));
  setTimer($('#hunger'));
  ageTimer($('#age'));
}




function checkGameOver() {
  checkHunger();
  checkMood();
  checkEnergy();
}

function child() {
  if ($('#age').val() === 10) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.pet').css({'width': '300px', 'height': '250px', 'left': '50%', 'top': '60%'})
  }
}

function adult() {
  if ($('#age').val() === 20) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.head').css({'background': 'blue'});
    $('.body').css({'background': 'blue'});
    $('.pet').css({'width': '350px', 'height': '300px', 'left': '40%', 'top': '45%'})
  }
}

function elder() {
  if ($('#age').val() === 30) {
    console.log('hello');
    $('.pet').velocity('transition.bounceDownIn');
    $('.pet').css({'width': '280px', 'height': '240px', 'left': '50%', 'top': '60%'})
    $('.head').css({'background': 'gray'});
    $('.body').css({'background': 'gray'});
    $('.eyes span').css({'width': '10%', 'height': '10%'});
  }
}

/* width: 300px;
height: 250px; */
/* left: 50%;
top: 60%; */

// ===================================
// Start Program
// ===================================


startTamagotchi()
