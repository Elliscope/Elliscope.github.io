window.onload=function(){
  document.getElementById("backButton").style.display='none';

}


function expand1(){

//code to log the menu image

      //$("#draggable").removeAttr( 'style' );
      $("#img1").removeAttr( 'style');
    //  $("#img1").css({'height':'1000px','width':'1000px'});
      $("#img1").css({'margin-left': 'auto' ,'margin-right': 'auto'});
      $("#dr1").css({'position':'absolute'});
      $( "#dr1" ).draggableTouch();
      // $('<img src="'+ "gallery/dr1.jpg" +'" id = "img1">').load(function() {
      // console.log("in the loadImage function" );
      // $(this).width(150).height(150).appendTo('#dr1');
      hammerIt(document.getElementById("dr1"),true);
     //$("#drlogo" ).draggableTouch();  
  // });
      // $("#dr1" ).draggableTouch();
      // hammerIt(document.getElementById("dr1"));
      $("#dr2").hide();
      $("#dr3").hide();
      $("#dr4").hide();
      document.getElementById("backButton").style.display='block';
    /*  $("#backButton").removeAttr('style');
      $("#backButton").css({'height': '50px', 'width': '100px','position':'absolute', 'left': '0','bottom':'0','display':'true'});*/
  // $("#backButton").css({'position':'relative','bottom':'0'});
}


 function expand2() {
 	 $("#img2").removeAttr( 'style');
      $("#dr2").css('position','absolute')
      $( "#dr2" ).draggableTouch();
      hammerIt(document.getElementById("dr2"),true);
      $("#dr1").hide();
      $("#dr3").hide();
      $("#dr4").hide();
      document.getElementById("backButton").style.display='block';
}

 function expand3() {
 	  $("#img3").removeAttr( 'style');
      $("#dr3").css('position','absolute')
      $( "#dr3" ).draggableTouch();
      hammerIt(document.getElementById("dr3"),true);
      $("#dr1").hide();
      $("#dr2").hide();
      $("#dr4").hide();
      document.getElementById("backButton").style.display='block';
}


 function expand4() {
 	  $("#img4").removeAttr( 'style');
      $("#dr4").css('position','absolute')
      $( "#dr4" ).draggableTouch();
      hammerIt(document.getElementById("dr4"),true);
      $("#dr1").hide();
      $("#dr2").hide();
      $("#dr3").hide();
      document.getElementById("backButton").style.display='block';
}

 function backButton() {
 	  $("#img1").removeAttr( 'style');
 	  $("#img2").removeAttr( 'style');
 	  $("#img3").removeAttr( 'style');
 	  $("#img4").removeAttr( 'style');

 	  $("#dr1").removeAttr( 'style');
 	  $("#dr2").removeAttr( 'style');
 	  $("#dr3").removeAttr( 'style');
 	  $("#dr4").removeAttr( 'style');

 	  $("#img1").css({'border-radius': '150px','-webkit-border-radius': '150px','-moz-border-radius': '150px'});
 	  $("#img2").css({'border-radius': '150px','-webkit-border-radius': '150px','-moz-border-radius': '150px'});
 	  $("#img3").css({'border-radius': '150px','-webkit-border-radius': '150px','-moz-border-radius': '150px'});
 	  $("#img4").css({'border-radius': '150px','-webkit-border-radius': '150px','-moz-border-radius': '150px'});

      $("#dr1").css({'margin': '50px','margin-left': '750px','left': '250px','top': '80px'})
      $("#dr2").css({'margin': '50px','margin-left': '350px','right': '400px'})
      $("#dr3").css({'margin':' 50px', 'left':' 400px'})
      $("#dr4").css({'margin':'50px','margin-left': '750px','left': '100px'})

      $( "#dr1" ).draggableTouch("disable");
      $( "#dr2" ).draggableTouch("disable");
      $( "#dr3" ).draggableTouch("disable");
      $( "#dr4" ).draggableTouch("disable");

      hammerIt(document.getElementById("dr1"),false);
      hammerIt(document.getElementById("dr2"),false);
      hammerIt(document.getElementById("dr3"),false);
      hammerIt(document.getElementById("dr4"),false);


      document.getElementById("backButton").style.display='none';

      $("#dr1").show();
      $("#dr2").show();
      $("#dr3").show();
      $("#dr4").show();


}


// var obj = document.getElementById('draggable');
//    obj.addEventListener('touchmove', function(event) {
//   // If there's exactly one finger inside this element
//   if (event.targetTouches.length == 1) {
//     var touch = event.targetTouches[0];
//     // Place element where the finger is
//     obj.style.left = touch.pageX + 'px';
//     obj.style.top = touch.pageY + 'px';
//   }
// }, false);  



//function to load the image by button
 function loadImage(path, width, height, target) {
    $('<img src="'+ path +'">').load(function() {
      console.log("in the loadImage function" );
      $(this).width(width).height(height).appendTo(target);
      //$(target).append(this);
     // .appendTo(target);
    });
  }



  //Hammer test


//function to resize the image using hammer.js
function hammerIt(elm , choice) {
hammertime = new Hammer(elm, {});
if(choice){
  hammertime.get('pinch').set({
    enable: true
});
}else{
   hammertime.get('pinch').set({
    enable: false
  });
}

if(choice){
  var posX = 0,
    posY = 0,
    scale = 1,
    last_scale = 1,
    last_posX = 0,
    last_posY = 0,
    max_pos_x = 0,
    max_pos_y = 0,
    transform = "",
    el = elm;

hammertime.on('doubletap pan pinch panend pinchend', function(ev) {

  if (ev.type == "rotate") {
  }


    if (ev.type == "doubletap") {
        transform =
            "translate3d(0, 0, 0) " +
            "scale3d(2, 2, 1) ";
        scale = 2;
        last_scale = 2;
        try {
            if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
                transform =
                    "translate3d(0, 0, 0) " +
                    "scale3d(1, 1, 1) ";
                scale = 1;
                last_scale = 1;
            }
        } catch (err) {}
        el.style.webkitTransform = transform;
        transform = "";
    }

    //pan    
    if (scale != 1) {
        posX = last_posX + ev.deltaX;
        posY = last_posY + ev.deltaY;
        max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
        max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
        if (posX > max_pos_x) {
            posX = max_pos_x;
        }
        if (posX < -max_pos_x) {
            posX = -max_pos_x;
        }
        if (posY > max_pos_y) {
            posY = max_pos_y;
        }
        if (posY < -max_pos_y) {
            posY = -max_pos_y;
        }
    }


    //pinch
    if (ev.type == "pinch") {
        scale = Math.max(.1, Math.min(last_scale * (ev.scale), 10));
    }
    if(ev.type == "pinchend"){last_scale = scale;}

    //panend
    if(ev.type == "panend"){
    last_posX = posX < max_pos_x ? posX : max_pos_x;
    last_posY = posY < max_pos_y ? posY : max_pos_y;
    }

    if (scale != 1) {
        transform =
            "translate3d(" + posX + "px," + posY + "px, 0) " +
            "scale3d(" + scale + ", " + scale + ", 1)";
    }

    if (transform) {
        el.style.webkitTransform = transform;
    }
});
}


}