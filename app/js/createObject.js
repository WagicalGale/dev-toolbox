function createColourObject(name, colour, desc) {
  var data = getDataFile();

  if (name == "") return;
  if (colour == "") return;

  data.objects.push({
    "type": "Colour",
    "name": name,
    "desc": desc,
    "value": colour
  })

  saveDataFile(data);
  ipcRenderer.send('object-created');
}

function createColourPaletteObject(name, desc) {
  var data = getDataFile();

  if (name == "") return;

  data.objects.push({
    "type": "Colour Palette",
    "name": name,
    "desc": desc
  })

  saveDataFile(data);
  ipcRenderer.send('object-created');
}

function createCodeObject(name, desc) {
  var data = getDataFile();

  if (name == "") return;

  data.objects.push({
    "type": "Code",
    "name": name,
    "desc": desc
  });

  saveDataFile(data);
  ipcRenderer.send('object-created');
}
