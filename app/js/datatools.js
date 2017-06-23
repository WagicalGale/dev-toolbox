var path = require('path');
var fs = require('fs');
var electron = require('electron');
var {ipcRenderer} = electron;
var $ = require('jquery');

var appdata = (electron.app || electron.remote.app).getPath('userData');
var path = path.join(appdata, 'userdata.json');

function getDataFile() {
  // Creates userdata file if needed
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '{"settings": {}, "objects": []}');
    console.log(`Created file ${path}`);
  }
  var data = JSON.parse(fs.readFileSync(path, "utf8"));
  return(data)
}

function saveDataFile(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), function(err) {
    if (err) console.error(err);
  })
}

function deleteObject(object) {
  var data = getDataFile();
  data.objects.splice(object,1);
  saveDataFile(data);
  generateObjects(data);

  var titleBar = document.getElementById('title-bar');
  var mainBody = document.getElementById('main-body');
  var bottomBar = document.getElementById('bottombar');
  while (titleBar.hasChildNodes()) {
    titleBar.removeChild(titleBar.lastChild);
  }
  while (mainBody.hasChildNodes()) {
    mainBody.removeChild(mainBody.lastChild);
  }
  if ($(bottomBar).find('.delete-object').length !== 0) {
    bottomBar.removeChild(bottomBar.lastChild);
  }

  var placeholderTitle = document.createElement('h1');
  var titleText = document.createTextNode('Dev Toolbox');
  placeholderTitle.appendChild(titleText);

  var placeholderInfo = document.createElement('p');
  var placeholderText = document.createTextNode('Choose an object to the left or create a new one.');
  placeholderInfo.appendChild(placeholderText);

  titleBar.appendChild(placeholderTitle);
  mainBody.appendChild(placeholderInfo);
}
