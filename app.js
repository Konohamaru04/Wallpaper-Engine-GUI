const { app, BrowserWindow } = require ('electron');
const path = require('path');
const url = require('url');

let win;

var APP_DIR = '/app/';

function createWindow(){

    win = new BrowserWindow({
        width:500,
        height:800,
       frame:false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.openDevTools();

    win.loadURL(url.format({
        pathname: path.join(__dirname, APP_DIR, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    win.on('closed', function(){ 

        app.quit() 

    

  }); 
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    
        app.quit();
    

    
});