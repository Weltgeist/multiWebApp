function createListItems(object) {
  var listItems = ''
  for (var key in object) {
    listItems += '<li>' + key + ':' + object[key] + '</li>'
  }
  return listItems
}



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

  $('.horoscope form').on('submit', function(event) {
    event.preventDefault()
    $('.horoscope button').hide(500);
    //$('.result').show(500).slideUp(1500).slideDown(1500)
    $('.horoscope .result').show(500).append("<p>I'll be the last paragraph in the article</p>")

  })

  $('.weather form').on('submit', function(event) {
    event.preventDefault()
    $('.weather button').hide(500);
    //$('.result').show(500).slideUp(1500).slideDown(1500)
    $('.weather .result').show(500).append("<p>I'll be the last paragraph in the article</p>")

  })
  
  $('.recipe form').on('submit', function(event) {
    event.preventDefault()
    $('.recipe button').hide(500);
    //$('.result').show(500).slideUp(1500).slideDown(1500)
    $('.recipe .result').show(500).append("<p>I'll be the last paragraph in the article</p>")

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
