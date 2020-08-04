$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  console.log("Hello World");

  $('a').click(function(){
    console.log('linkas been click');
    $('h1').slideUp(1500).slideDown(1500);
    $('.circle').toggleClass('green');
  })

  $('h1').on('mouseenter', function() {
    console.log('hover achieve')
    $(this).css('background-color', 'red')
  })

  $('h1').on('mouseleave', function() {
    console.log('hover achieve')
    $(this).css('background-color', 'blue')
  })

  $('form').on('submit', function(event) {
    event.preventDefault()
    $('button').hide(500);
    $('.result').show(500).slideUp(1500).slideDown(1500)
  })
  
});


$('form input').on('focus', function() {
  // add code here
  $(this).css('outline', '1px dotted red')
})

$('form input').on('blur', function() {
  // add code here
  $(this).css('outline', '')
})

$('form input').on('change', function() {
  // add code here
  
  $(this).css('outline', '1px dotted green')
})
