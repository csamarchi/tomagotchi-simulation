// Tamagotchi
//
// Created by Christine Samarchi



//Global Variables
let ageHealth = $('#age').val()
let time = 0;
let healthBarsMin = 0
let healthBarsMax = 10
let timerInterval = 2000


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
const setTimer = (healthBar, increment) => {
  const timer = setInterval(() => {


    if ($('#hunger').val() === 0 || $('#mood').val() === 0 || $('#sleep').val() === 0) {
      //console.log('game over');
      alert('GAME OVER')
      clearInterval(timer);
    }
    if (increment) {
      decrementHealthBar(healthBar)
    }
     checkMinAndMax(healthBar);

    if (decrementHealthBar(healthBar) === 0) {
       console.log('game over');
       clearInterval(timer)
    }

}, timerInterval)
}

//Age Timer
const ageTimer = (healthBar, increment) => {
  const timer = setInterval(() => {
  adult()
  time++;
  // console.log(time);
  if (increment) {
    incrementAge(healthBar)
  } if (time === 40) {
      clearInterval(timer);
      console.log('game over');
      alert('GAME OVER')
    }
  }, 1000)

}


function startTamagotchi() {
  setTimer($('#mood'), false);
  setTimer($('#sleep'), false);
  setTimer($('#hunger'), false);
  ageTimer($('#age'), true);
}




function checkGameOver() {
  checkHunger();
  checkMood();
  checkEnergy();
}


function adult() {
  if ($('#age').val() === 2) {
    console.log('hello');
    $('.head').css({'background': 'blue'});
    $('.body').css({'background': 'blue'});
    $('.body').append('</div>').addClass('left-arm');
  }
}




// ===================================
// Start Program
// ===================================


startTamagotchi()
