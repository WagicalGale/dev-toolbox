function displayObject(object) {
  var displayArea = document.getElementById('main-body');
  var bottomBar = document.getElementById('bottombar');
  //Clear existing elements
  while (displayArea.hasChildNodes()) {
    displayArea.removeChild(displayArea.lastChild);
  }
  if ($(bottomBar).find('.delete-object').length !== 0) {
    bottomBar.removeChild(bottomBar.lastChild);
  }

  var type = object.type;
  var name = object.name;
  var description = object.desc;
  var value = object.value;

  $('#title-bar h1').text(object.name);

  switch (type) {
    case "Colour":
      switchColour(name, description, value)
      break;

    case "Colour Palette":
      break;

    case "Code":
      break;
  }

  var deleteButton = document.createElement('div');
  var deleteImage = document.createElement('img');
  deleteImage.src = 'images/delete.png';
  deleteButton.className = "delete-object";
  deleteButton.appendChild(deleteImage);

  bottomBar.appendChild(deleteButton);
}

function switchColour(name, description, value) {
  var displayArea = document.getElementById('main-body');

  var display = document.createElement('div');
  display.className = "colour-display";
  display.style.backgroundColor = value;

  var objectName = document.createElement('h2');
  var objectNameText = document.createTextNode(name);
  objectName.className = "object-name";
  objectName.appendChild(objectNameText);

  var colourInput = document.createElement('textarea');
  var colourValue = document.createTextNode(value);
  colourInput.className = "colour-input";
  colourInput.rows = "1";
  colourInput.maxLength = "7";
  colourInput.appendChild(colourValue);

  var objectDescription = document.createElement('p');
  var objectDescriptionText = document.createTextNode(description);
  objectDescription.className = "object-desc";
  objectDescription.appendChild(objectDescriptionText);

  displayArea.appendChild(display);
  displayArea.appendChild(objectName);
  displayArea.appendChild(colourInput);
  displayArea.appendChild(objectDescription);

  $(".colour-input").focus(function() {
    $(this).select();
  })
}
