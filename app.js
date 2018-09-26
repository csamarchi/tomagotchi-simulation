// Tamagotchi
//
// Created by Christine Samarchi
//Global Variables
var moodHealth = $('#mood').val()
var ageHealth = $('#age').val()
var energyHealth = $('#sleep').val()
var hungerHealth = $('#hunger').val()

var healthBarsMin = 0
var healthBarsMax = 10


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
  console.log('play work');
  moodHealth++
  $('#mood').val(moodHealth)
  checkMinAndMax($('#mood'))
})

$('#feed').on('click', function() {
  console.log('feed work');
  hungerHealth--
  $('#hunger').val(hungerHealth)
  checkMinAndMax($('#hunger'))
})

$('#lights').on('click', function() {
  console.log('lights work');
  energyHealth++
  $('#sleep').val(energyHealth)
  checkMinAndMax($('#sleep'))
})


//Animations
$('.pet').velocity('transition.bounceDownIn');
$('.pet').velocity('transition.bounceUpIn');


//Min & Max Function
function checkMinAndMax(healthBar) {
  if (healthBar.val() <= healthBarsMin) {
    healthBar.val(healthBarsMin)
  } if (healthBar.val() >= healthBarsMax) {
    healthBar.val(healthBarsMax)
  }
}


//Timer
const setTimer = (healthBar, increment) => {
  const interval = setInterval(() => {
    console.log(healthBar.val());

    let x = healthBar.val();

    if (increment) {
      x++
    } else {
      x--
    }

    healthBar.val(x);
    checkMinAndMax(healthBar);
}, 1000)
}
// setTimer($('#mood'), false);
// setTimer($('#sleep', false));
// setTimer($('#hunger'), true);
