var file = 23;
var options = {
    scriptPath : path.join(__dirname, '/python/'),
    args : [file]
}

let pyshell;

document.getElementById('stop').disabled = true;
document.getElementById('start').disabled = false;

function loopPro(ele) {

    if(ele === 1)
    {
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        pyshell = new PythonShell('loophandler.py', options);
        pyshell.on('message', function(message){
    });
    }

    else if(ele === 0)
    {
        document.getElementById('stop').disabled = true;
        document.getElementById('start').disabled = false;
        pyshell.terminate();
    }
    else
    {
        alert('Invalid Parameter');
    }

}
