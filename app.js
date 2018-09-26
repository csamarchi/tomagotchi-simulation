// Tamagotchi
//
// Created by Christine Samarchi
//Global Variables


var moodHealth = $('#mood').val()
var ageHealth = $('#mood').val()
var energyHealth = $('#mood').val()
var hungerHealth = $('#mood').val()


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
})

$('#feed').on('click', function() {
  console.log('feed work');
})

$('#lights').on('click', function() {
  console.log('lights work');
  energyHealth++
  $('#sleep').val(energyHealth)
})


//Animations
$('.pet').velocity('transition.bounceDownIn');
$('.pet').velocity('transition.bounceUpIn');






var width = 10;

function test() {

}
