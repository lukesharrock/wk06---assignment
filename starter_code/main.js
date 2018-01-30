console.log('connected');

var cityNames = ["nyc", "la", "austin", "sf", "sydney"]
var optionTags = ""

// add cities to the select options list in HTML
cityNames.forEach(function(name) {
  optionTags += "<option>" + name + "</option>"
})

// this "appends" city options to the end of the list so they don't replace placeholder text
$('#city-type').append(optionTags);

// created a function to run
function cityPic(){

// finds the value of what the user has selected
  var citySelected = $('#city-type').val();

  if (citySelected === 'nyc') {
    $('body').addClass('nyc')
    console.log('yes newyork')
  };

  if (citySelected === 'la') {
    $('body').addClass('la')
    console.log('yes LA')
  };

  if (citySelected === 'austin') {
    $('body').addClass('austin')
  };

  if (citySelected === 'sf') {
    $('body').addClass('sf')
  };

  if (citySelected === 'sydney') {
    $('body').addClass('sydney')
  };

}

// runs the function when use changes the selection
  $('#city-type').change(cityPic);
