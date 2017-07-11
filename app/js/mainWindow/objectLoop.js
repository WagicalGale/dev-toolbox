function generateObjects(data) {
  var objects = document.getElementById('objects');

  while (objects.hasChildNodes()) {
    objects.removeChild(objects.lastChild);
  }

  for (i = 0; i < data.objects.length; i++) {
    //Create the object
    var objectElement = document.createElement("div");
    objectElement.className = "object";
    objectElement.id = i;

    //Create the title
    var titleElement = document.createElement("p");
    var titleText = document.createTextNode(data.objects[i].name);
    titleElement.className = "object-title";
    titleElement.appendChild(titleText);

    if (data.objects[i].type == "Colour") {
      //Create the COLOUR preview
      var colourPreviewElement = document.createElement("div");
      colourPreviewElement.className = "colour-preview";
      colourPreviewElement.id = "preview-" + i;
      colourPreviewElement.style.backgroundColor = data.objects[i].value;

      //Stick it all together
      objectElement.appendChild(titleElement);
      objectElement.appendChild(colourPreviewElement);
      objects.appendChild(objectElement);
    }

    else if (data.objects[i].type == "Colour Palette") {
      //Create the type thing
      var objectTypeElement = document.createElement("p");
      var objectTypeText = document.createTextNode(data.objects[i].type);
      objectTypeElement.className = "object-type";
      objectTypeElement.appendChild(objectTypeText);

      //Stick it all together
      objectElement.appendChild(titleElement);
      objectElement.appendChild(objectTypeElement);
      objects.appendChild(objectElement);
    }

    else if (data.objects[i].type == "Code") {
      //Create the type thing
      var objectTypeElement = document.createElement("p");
      var objectTypeText = document.createTextNode(data.objects[i].type);
      objectTypeElement.className = "object-type";
      objectTypeElement.appendChild(objectTypeText);

      //Stick it all together
      objectElement.appendChild(titleElement);
      objectElement.appendChild(objectTypeElement);
      objects.appendChild(objectElement);
    }
  }
}
