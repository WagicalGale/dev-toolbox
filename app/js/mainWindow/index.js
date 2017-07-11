var data = getDataFile();
var selectedkey;
generateObjects(data);

$(document).on('click', '.newobject', function() {
  ipcRenderer.send('open-new-object');
})

ipcRenderer.on('refresh-objects', function() {
  var data = getDataFile();
  generateObjects(data);
})

$(document).on('click', '.object', function() {
  var data = getDataFile();
  selectedkey = Number($(this).attr("id"));
  var selectedobject = data.objects[selectedkey];
  displayObject(selectedobject);
})

$(document).on('click', '.delete-object', function() {
  deleteObject(selectedkey);
  selectedkey = null;
})

$(document).on('change', '.colour-input', function() {
  if ($(this).val().length == 7) {
    var newColour = $(this).val();
    data.objects[selectedkey].value = $(this).val();
    saveDataFile(data);
    $('.colour-display').css('backgroundColor', newColour);
    document.getElementById("preview-" + selectedkey).style.backgroundColor = newColour;
  }
})
