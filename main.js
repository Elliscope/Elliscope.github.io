$(window).load(function() {

    $("#ImgButton").click(function () {
	   // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
	   // img.attr('src', "gallery/IBMWatsonChallenge.jpg");
	    // img.appendTo('#con');

	    console.log("imgPlace got executed ");
	    $('#imgPlace').prepend('<img id="theImg" src="gallery/IBMWatsonChallenge.jpg"/>');
	    $('#text1').html("the header has been changed");
	});   
});


$(document).ready(function () {
    $("#ImgButton").click(function () {
        console.log("imgPlace got executed ");
        $("p").append(" <b>Appended text</b>.");
    });
});

function PopImage() {
    console.log("imgPlace got executed ");
    $('#imgPlace').prepend('<img id="theImg" src="gallery/IBMWatsonChallenge.jpg"/>');
    $('#text1').html("the header has been changed");
   // document.getElementById("field2").value = document.getElementById("field1").value;
}



