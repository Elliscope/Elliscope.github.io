function image_open(mySource) {
    document.getElementById('viewer').style.visibility = 'visible';
    document.getElementById('viewer').style.opacity = '1';
    document.getElementById('viewer').style.filter = 'alpha(opacity=100)';
    myURL = mySource.style.backgroundImage.slice(4, -1).replace("\"", "").replace("\"", "");
    document.getElementById('viewer_image').src = myURL;
}
function image_close() {
    document.getElementById('viewer').style.opacity = '0';
    document.getElementById('viewer').style.filter = 'alpha(opacity=0)';
    document.getElementById('viewer').style.visibility = 'hidden';
    
}

