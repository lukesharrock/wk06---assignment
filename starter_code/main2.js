// create list of city names
var cityNames = ["nyc", "la", "austin", "sf", "sydney"]

// ... and add cities to the select options list in HTML
cityNames.forEach(function(city) {
  $('#city-type').append("<option>" + city + "</option>");
})

// this "appends" city options to the end of the list so they don't replace placeholder text

$('#city-type').change(function(event){
  var userInput = $('#city-type').val();
  if (userInput === 'nyc') {
    $('body').addClass('nyc')
  }
  else if (citySelected === 'la') {
    $('body').addClass('la')
  }
  else if (citySelected === 'austin') {
    $('body').addClass('austin')
  }
  else if (citySelected === 'sf') {
    $('body').addClass('sf')
  }
  else if (citySelected === 'sydney') {
    $('body').addClass('sydney')
  }
})
