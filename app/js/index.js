var electron = require('electron');
var {ipcRenderer} = electron;
var fs = require('fs');
var path = require('path');

var appdata = (electron.app || electron.remote.app).getPath('userData');
var path = path.join(appdata, 'userdata.json');
var data = getDataFile(path);

generateObjects(data);

var newObjectButton = document.querySelector('.newobject');
newObjectButton.addEventListener('click', function() {
  ipcRenderer.send('open-new-object');
});
