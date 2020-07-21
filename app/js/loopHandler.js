document.getElementById('stop').disabled = true;
document.getElementById('start').disabled = false;

//alert(options.pythonPath);

function loopPro(ele) {

    if(ele === 1)
    {
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        pyshell = new PythonShell('loophandler.py', options);
        pyshell.on('message', function(message){
            console.log('Frames Processing started !')
    });
    }

    else if(ele === 0)
    {
        document.getElementById('stop').disabled = true;
        document.getElementById('start').disabled = false;
        pyshell.terminate();
        console.log('Frames processing stopped !')
    }
    else
    {
        alert('Invalid Parameter');
    }

}
