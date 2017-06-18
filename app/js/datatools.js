function getDataFile(path) {
  // Creates userdata file if needed
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '{"settings": {}, "objects": {}}');
    console.log(`Created file ${path}`);
  }
  var data = JSON.parse(fs.readFileSync(path, "utf8"));
  return(data)
}

function saveDataFile(data, path) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), function(err) {
    if (err) console.error(err);
  })
}
