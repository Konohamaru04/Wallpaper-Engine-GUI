var title = document.getElementById('title').innerHTML;

document.getElementById('titleShown').innerHTML = title;

var devName = "Amartya Deshmukh";

const $ = require('jquery');

document.getElementById('devName').innerHTML = devName;

var {PythonShell} = require('python-shell');

var path = require('path');

var pro = document.getElementById('bText');

var file = 28;

var options = {
    scriptPath : path.join(__dirname, '/python/'),
    args : [file]
}

let pyshell;