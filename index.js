keyWeatherApi = '8387c1d42ca5ca7e1f30a03217438028';

function createListItems(object) {
  var listItems = ''
  for (var key in object) {
    listItems += '<li>' + key + ':' + object[key] + '</li>'
  }
  return listItems
}

const getData = (object, key, position) => {
  if (typeof key === 'string'){
    $(position).show(500).append("<p>"+object[key]+"</p>");
  }
  else if  (Array.isArray(key)){
    console.log(key)
    key.forEach(elem => $(position).show(500).append("<p>"+object[elem]+"</p>"));
  }
}


const horoscopeData ={
  horoscope: "Feeling moody, Cancer? You can chalk it up to today’s tough angle between the moon and volcanic Pluto. Put extra effort into not projecting your tension and frustration onto those around you, especially when dealing with your so-called opponents. If you’ve got social plans this evening, it might be best to bow out. Why force yourself to go through the motions when all you really want to do is curl up with your Kindle or catch up with the Kardashians?",
  date: "Wednesday, August 15, 2018",
  sign: "cancer"
}

const weatherData =  {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

}


const drinkData = {
  "drinks": [
        {
            "idDrink": "13060",
            "strDrink": "Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "",
            "strMeasure5": "",
            "strMeasure6": "",
            "strMeasure7": "",
            "strMeasure8": "",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:42:59"
        },
        {
            "idDrink": "11118",
            "strDrink": "Blue Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Blue Curacao",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "Coarse ",
            "strMeasure5": " ",
            "strMeasure6": " ",
            "strMeasure7": " ",
            "strMeasure8": " ",
            "strMeasure9": " ",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:51:53"
        }]
}


$(document).ready(function() {
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
    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/gemini', function(data) {
  console.log(data)
})
    $('.horoscope .search-button').hide(500);
    $('.horoscope input').hide(500);
    $('.horoscope .reset-button').show(500);
    console.log($('.horoscope input').val());
    getData(horoscopeData,['date','sign','horoscope'],'.horoscope .result')
    $('.horoscope .reset-button').show(500);
  })

  $('.weather form').on('submit', function(event) {
    event.preventDefault()
    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid='+keyWeatherApi, function(data) {
  console.log(data)
})
    $('.weather .search-button').hide(500);
    $('.weather input').hide(500);
    $('.weather .reset-button').show(500);
    console.log($('.weather input').val());
    getData(weatherData,'name','.weather .result')
    $('.weather .reset-button').show(500);

  })
  
  $('.recipe form').on('submit', function(event) {
    event.preventDefault()
    $.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', function(data) {
  console.log(data)
})
    $('.recipe .search-button').hide(500);
    $('.recipe input').hide(500);
    $('.recipe .reset-button').show(500);
    console.log($('.recipe input').val());
    drinkData.drinks.forEach(elem => 
      getData(elem,['strDrink','strCategory','strIngredient1','strIngredient2','strIngredient3'],'.recipe .result'))
      $('.recipe .reset-button').show(500);
  })

  $('.recipe .reset-button').on('click', function(event) { 
    event.preventDefault()
    console.log(event.target)
    $('.recipe .search-button').show(500);
    $('.recipe input').show(500);
    $('.recipe .reset-button').hide(500);
    $('.recipe .result').hide(500);
    $('.recipe .result > p').remove();
  })
    
  $('.weather .reset-button').on('click', function(event) { 
    event.preventDefault()
    console.log(event.target)
    $('.weather .search-button').show(500);
    $('.weather input').show(500);
    $('.weather .reset-button').hide(500);
    $('.weather .result').hide(500);
    $('.weather .result > p').remove();
  })
  
  $('.horoscope .reset-button').on('click', function(event) { 
    event.preventDefault()
    console.log(event.target)
    $('.horoscope .search-button').show(500);
    $('.horoscope input').show(500);
    $('.horoscope .reset-button').hide(500);
    $('.horoscope .result').hide(500);
    $('.horoscope .result > p').remove();
  })
    

});


$('form input').on('focus', function() {
  $(this).css('outline', '1px dotted red')
})

$('form input').on('blur', function() {
  $(this).css('outline', '')
})

$('form input').on('change', function() {
  $(this).css('outline', '1px dotted green')
})
