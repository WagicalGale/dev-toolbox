var $ = require('jquery');

$('.object-type').change(function() {
  if ($(this).val() == "colour") optionColour();
  else if ($(this).val() == "colour-palette") optionPalette();
  else if ($(this).val() == "code-block") optionCode()
})

var typeOptions = document.getElementById('type-options')
function optionColour() {
  empty(typeOptions);
  //Colour Selector
  var colourSelectorTitle = document.createElement('p');
  var colourSelectorTitleText = document.createTextNode("Colour:");
  colourSelectorTitle.appendChild(colourSelectorTitleText);

  var colourSelector = document.createElement('input');
  colourSelector.type = 'color';

  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description:");
  descriptionTitle.appendChild(descriptionTitleText);

  var descriptionInput = document.createElement('textarea');

  //Append
  typeOptions.appendChild(colourSelectorTitle);
  typeOptions.appendChild(colourSelector);
  typeOptions.appendChild(descriptionTitle);
  typeOptions.appendChild(descriptionInput);
}

function optionPalette() {
  empty(typeOptions);
}

function optionCode() {
  empty(typeOptions);
}

function empty(toClear) {
  toClear.innerHTML = '';
}
