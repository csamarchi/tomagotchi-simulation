// Tamagotchi
//
// Created by Christine Samarchi



//Global Variables
let ageHealth = $('#age').val()
let time = 0;
let healthBarsMin = 0
let healthBarsMax = 10
let timerInterval = 1000


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
  $('.pet').velocity('transition.bounceUpIn');
  $('.pet').velocity('transition.bounceDownIn');
})

$('#feed').on('click', function() {
  decrementHealthBar($('#hunger'))
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
  console.log(age);
}


//Timer
const setTimer = (healthBar, increment) => {
  timer = setInterval(() => {

    if (increment) {
      incrementHealthBar(healthBar)
      //incrementAge()

    } else {
      decrementHealthBar(healthBar)
    }

    checkMinAndMax(healthBar);
}, timerInterval)
}

//Age Timer
const ageTimer = (healthBar, increment) => {
  const timer = setInterval(() => {
  time++;
  // console.log(time);
  if (increment) {
    incrementAge(healthBar)
  } if (time === 40) {
      clearInterval(timer);
      console.log('game over');
      alert('GAME OVER')
    }
  }, 3000)
}


function startTamagotchi() {
  setTimer($('#mood'), false);
  setTimer($('#sleep'), false);
  setTimer($('#hunger'), true);
  ageTimer($('#age'), true);
}





// ===================================
// Start Program
// ===================================


//startTamagotchi()
