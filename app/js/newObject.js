var $ = require('jquery');

var typeOptions = document.getElementById('type-options')

$('.object-type').change(function() {
  if ($(this).val() == "colour") optionColour(typeOptions);
  else if ($(this).val() == "colour-palette") optionPalette(typeOptions);
  else if ($(this).val() == "code-block") optionCode(typeOptions);
})

$('.create-object').click(function() {
  switch $('.object.type').val() {
    case 'colour':
      break;
    case 'colour-palette':
      break;
    case 'code-block':
      break;
  }
})
