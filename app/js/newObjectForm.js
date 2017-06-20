function optionColour(typeOptions) {
  empty(typeOptions);
  //Colour Selector
  var colourSelectorTitle = document.createElement('p');
  var colourSelectorTitleText = document.createTextNode("Colour:");
  colourSelectorTitle.appendChild(colourSelectorTitleText);

  var colourSelector = document.createElement('input');
  colourSelector.className = 'object-value';
  colourSelector.type = 'color';

  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description:");
  descriptionTitle.appendChild(descriptionTitleText);

  var descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'object-desc';

  //Append
  typeOptions.appendChild(colourSelectorTitle);
  typeOptions.appendChild(colourSelector);
  typeOptions.appendChild(descriptionTitle);
  typeOptions.appendChild(descriptionInput);
}

function optionPalette(typeOptions) {
  empty(typeOptions);
  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description:");
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

function optionCode(typeOptions) {
  empty(typeOptions);
  //Description
  var descriptionTitle = document.createElement('p');
  var descriptionTitleText = document.createTextNode("Description:");
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
