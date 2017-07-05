var data = getDataFile();
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
