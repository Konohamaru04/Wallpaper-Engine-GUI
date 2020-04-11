const $ = require('jquery');
const { remote } = require('electron');

var win = remote.getCurrentWindow();

$('#minimize').click(function(){    
    win.minimize();
});

$('#maximize').click(function(){
    if(!win.isMaximized()){
        win.maximize();
    }
    else{
        win.unmaximize();
    }
});

$('#close').click(function(){
    win.close();
});

