'use strict';

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

var mainWindow = null;
var newObjectWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
      height: 600,
      width: 800,
      resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools(); //temp

    mainWindow.on('close', function() {
      app.quit();
    })
});

ipcMain.on('open-new-object', function() {
  if (newObjectWindow) return;

  newObjectWindow = new BrowserWindow({
    height: 500,
    width: 400,
    resizable: false
  });

  newObjectWindow.loadURL('file://' + __dirname + '/app/newObject.html');
  newObjectWindow.setMenu(null);
  //newObjectWindow.webContents.openDevTools(); //temp

  newObjectWindow.on('close', function() {
    newObjectWindow = null;
  })
})

ipcMain.on('object-created', function(event) {
  mainWindow.webContents.send('refresh-objects');
  newObjectWindow.close();
})
