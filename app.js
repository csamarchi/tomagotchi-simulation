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

$('#play').on('click', function() {
  console.log('play work');
})

$('#feed').on('click', function() {
  console.log('feed work');
})

$('#lights').on('click', function() {
  console.log('lights work');
})


$('.pet').velocity('transition.bounceDownIn');
$('.pet').velocity('transition.bounceUpIn');
