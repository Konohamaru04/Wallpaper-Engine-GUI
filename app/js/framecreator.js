
function run_framecreator1() {
    console.log("Framecreator");
    pro.style.display = 'block';
    exec("frameCreator.exe", function (err, data) {
        console.log(err);
        console.log(data);

        if (parseInt(data) == 69) {
            pro.style.display = 'none';
            alert('Error opening video.');
        }
        if (parseInt(data) == 100) {
            pro.style.display = 'none';
            alert("Video loaded successfully !");
        }

    });
}



