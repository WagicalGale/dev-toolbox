'use strict';

var electron = require('electron');
var {app, BrowserWindow, ipcMain} = electron;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
      height: 600,
      width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.setMenu(null);
    mainWindow.webContents.openDevTools(); //temp
});
