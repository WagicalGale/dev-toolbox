var data = getDataFile();
generateObjects(data);

var newObjectButton = document.querySelector('.newobject');
newObjectButton.addEventListener('click', function() {
  ipcRenderer.send('open-new-object');
});

ipcRenderer.on('refresh-objects', function() {
  var data = getDataFile();
  generateObjects(data);
})

$(document).on('click', '.object', function() {
  var data = getDataFile();
  var key = Number($(this).attr("id"));
  selectedobject = data.objects[key];
  displayObject(selectedobject);
})

$(document).on('click', '.delete-object', function() {
  deleteObject(selectedobject);
})
