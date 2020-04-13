
function openSlideMenu(){
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
    document.getElementById('bars').style.display = 'none';
}

function closeSlideMenu(){
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
    document.getElementById('bars').style.display = 'block';
}