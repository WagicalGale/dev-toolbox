var electron = require('electron');
var {ipcRenderer} = electron;

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

$('.object').click(function() {
  var key = Number($(this).attr("id"));
  var object = data.objects[key];
  
})
