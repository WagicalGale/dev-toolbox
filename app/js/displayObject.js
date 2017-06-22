function displayObject(object) {
  $('#title-bar h1').text(object.name);

  switch (object.type) {
    case "Colour":
      $('colour-display').style({
        backgroundColor: object.value
      })
      break;
    case "Colour Palette":
      break;
    case "Code":
      break;
  }
}
