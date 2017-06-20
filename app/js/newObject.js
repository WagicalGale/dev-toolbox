var {ipcRenderer} = electron;

var data = getDataFile()
colourSelector.appendTo(document.getElementById('colour-selector'));

$('.object-type').change(function() {
  if ($(this).val() == "colour") optionColour(typeOptions);
  else if ($(this).val() == "colour-palette") optionPalette(typeOptions);
  else if ($(this).val() == "code-block") optionCode(typeOptions);
})

$('.create-object').click(function() {
  var newObjectName = $('.object-name').val();
  var newObjectDesc = $('.object-desc').val();
  var selectedOption = $('.object-type').val();

  switch (selectedOption) {
    case 'colour':
      var newObjectColour = $('.colour-id').val();
      createColourObject(newObjectName, newObjectColour, newObjectDesc);
      break;

    case 'colour-palette':
      createColourPaletteObject(newObjectName, newObjectDesc);
      break;

    case 'code-block':
      createCodeObject(newObjectName, newObjectDesc);
      break;
  }
})

colourSelector.on('update', function() {
  $('.colour-id').val(colourSelector.getHexString());
})

$('.colour-id').change(function() {
  colourSelector.setColor($(this).val());
})
$('.colour-id').keypress(function(e) {
  if (e.which == 13) colourSelector.setColor($(this).val());
})
