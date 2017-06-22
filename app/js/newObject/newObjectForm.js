var $ = require('jquery');

var ColorPicker = require('simple-color-picker');

var typeOptions = document.getElementById('type-options')
var colourSelector = new ColorPicker({width: 75, height: 50, color: '#FFFFFF'});

function optionColour() {
  empty(typeOptions);
  //Colour Selector
  var colourSelectorTitle = document.createElement('p');
  var colourSelectorTitleText = document.createTextNode("Colour:");
  colourSelectorTitle.appendChild(colourSelectorTitleText);

  var colourSelectorInput = document.createElement('textarea');
  var colourSelectorDefaultValue = document.createTextNode('#FFFFFF');
  colourSelectorInput.appendChild(colourSelectorDefaultValue);
  colourSelectorInput.className = 'colour-id';
  colourSelectorInput.maxLength = '7';
  colourSelectorInput.rows = "1";

  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description (optional):");
  descriptionTitle.appendChild(descriptionTitleText);

  var descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'object-desc';

  //Append
  typeOptions.appendChild(colourSelectorTitle);
  colourSelector.appendTo(typeOptions);
  typeOptions.appendChild(colourSelectorInput);
  typeOptions.appendChild(descriptionTitle);
  typeOptions.appendChild(descriptionInput);

  $('.colour-id').change(function() {
    colourSelector.setColor($(this).val());
  })
  $('.colour-id').keypress(function(e) {
    if (e.which == 13) colourSelector.setColor($(this).val());
  })
}

function optionPalette() {
  empty(typeOptions);
  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description (optional):");
  descriptionTitle.appendChild(descriptionTitleText);

  var descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'object-desc';

  //Info text
  var infoText = document.createElement('p');
  var infoTextText = document.createTextNode("Colours can be added after the object is created");
  infoText.appendChild(infoTextText);

  //Append
  typeOptions.appendChild(descriptionTitle);
  typeOptions.appendChild(descriptionInput);
  typeOptions.appendChild(infoText);
}

function optionCode() {
  empty(typeOptions);
  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description (optional):");
  descriptionTitle.appendChild(descriptionTitleText);

  var descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'object-desc';

  //Info text
  var infoText = document.createElement('p');
  var infoTextText = document.createTextNode("Code can be added after the object is created");
  infoText.appendChild(infoTextText);

  //Append
  typeOptions.appendChild(descriptionTitle);
  typeOptions.appendChild(descriptionInput);
  typeOptions.appendChild(infoText);
}

function empty(toClear) {
  toClear.innerHTML = '';
}
