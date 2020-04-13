var {PythonShell} = require('python-shell');
var path = require('path');
var pro = document.getElementById('bText');

function run_framecreator() {
    var file = document.getElementById('frameCreator').value;
    var options = {
        scriptPath : path.join(__dirname, '/python/'),
        args : [file]
    }
    pro.style.display = 'block';
    let pyshell = new PythonShell('frameCreator.py', options);
    
    pyshell.on('message', function(message){
    if(message === '100')
    {
        pro.style.display = 'none';
        alert("Success !");
    }
    }); 
    document.getElementById('frameCreator').value = "";
}



