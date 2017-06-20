var path = require('path');
var fs = require('fs');
var electron = require('electron');
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
