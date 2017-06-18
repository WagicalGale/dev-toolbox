function generateObjects(data) {
  for (i = 0; i < data.objects.length; i++) {
    if (data.objects[i].type == "Colour") {
      //Create the object
      var objectElement = document.createElement("div");
      objectElement.className = "object";

      //Create the title
      var titleElement = document.createElement("p");
      var titleText = document.createTextNode(data.objects[i].name);
      titleElement.className = "object-title";
      titleElement.appendChild(titleText);

      //Create the COLOUR preview
      var colourPreviewElement = document.createElement("div");
      colourPreviewElement.className = "colour-preview"
      colourPreviewElement.style.backgroundColor = data.objects[i].value;

      //Stick it all together
      objectElement.appendChild(titleElement);
      objectElement.appendChild(colourPreviewElement);
      document.getElementById('sidebar').appendChild(objectElement);
    }

    else if (data.objects[i].type == "Colour Palette") {
      //Create the object
      var objectElement = document.createElement("div");
      objectElement.className = "object";

      //Create the title
      var titleElement = document.createElement("p");
      var titleText = document.createTextNode(data.objects[i].name);
      titleElement.className = "object-title";
      titleElement.appendChild(titleText);

      //Create the type thing
      var objectTypeElement = document.createElement("p");
      var objectTypeText = document.createTextNode(data.objects[i].type);
      objectTypeElement.className = "object-type";
      objectTypeElement.appendChild(objectTypeText);

      //Stick it all together
      objectElement.appendChild(titleElement);
      objectElement.appendChild(objectTypeElement);
      document.getElementById('sidebar').appendChild(objectElement);
    }
  }
}
