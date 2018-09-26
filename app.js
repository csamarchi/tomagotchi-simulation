// Tamagotchi
//
// Created by Christine Samarchi



//Global Variables
var ageHealth = $('#age').val()

var healthBarsMin = 0
var healthBarsMax = 10
var timerInterval = 3000

var timer
//Min & Max Function
function checkMinAndMax(healthBar) {
  if (healthBar.val() <= healthBarsMin) {
    healthBar.val(healthBarsMin)
  } if (healthBar.val() >= healthBarsMax) {
    healthBar.val(healthBarsMax)
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
})

$('#feed').on('click', function() {
  decrementHealthBar($('#hunger'))
  checkMinAndMax($('#hunger'))
})

$('#lights').on('click', function() {
  incrementHealthBar($('#sleep'))
  checkMinAndMax($('#sleep'))
})


//Animations
$('.pet').velocity('transition.bounceDownIn');
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


//Timer
const setTimer = (healthBar, increment) => {
  timer = setInterval(() => {

    if (increment) {
      incrementHealthBar(healthBar)
    } else {
      decrementHealthBar(healthBar)
    }

    checkMinAndMax(healthBar);
}, timerInterval)
}

function startTamagotchi() {
  setTimer($('#mood'), false);
  setTimer($('#sleep'), false);
  setTimer($('#hunger'), true);
}







// ===================================
// Start Program
// ===================================


startTamagotchi()
