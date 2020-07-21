function startFC() {
    argVid = document.getElementById('argVid').value;
    var child = require('child_process').execFile;
    var executablePath = "framecreator.exe";
    var parameters = [argVid];

child(executablePath, parameters, function(err, data){
    console.log(err);
    console.log(data.toString());

    child.stdout.on('data', function(data) {
        console.log(data.toString()); 
        if(data === 69)
        {
            alert("Error : Video not found !");
        }
        if(data === 100)
        {
            alert("Success !");
        }
    });
});

}

function startLH() {

    argFPS = document.getElementById('argFPS').value;
    var child = require('child_process').execFile;
    var executablePath = "loophandler.exe";
    var parameters = [argFPS];

    child(executablePath, parameters, function(err, data){
    console.log(err);
    console.log(data.toString());
});

}