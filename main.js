var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    require('electron-compile').init();
    mainWindow = new BrowserWindow({width: 1280, height: 720});
    mainWindow.loadUrl('file://' + __dirname + '/static/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
