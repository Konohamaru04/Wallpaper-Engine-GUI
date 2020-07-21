function run_framecreator() {
    var file = document.getElementById('frameCreator').value;
    var options = {
        scriptPath : path.join(__dirname, '/python/'),
        args : [file]
    }
    pro.style.display = 'block';
    pyshell = new PythonShell('frameCreator.py', options);
    pyshell.on('message', function(message){
    
    if(message === '69')
    {
        alert('Error opening video.');
    }
    if(message === '100')
    {
        pro.style.display = 'none';
        alert("Video loaded successfully !");
    }
    }); 
    document.getElementById('frameCreator').value = "";
}



