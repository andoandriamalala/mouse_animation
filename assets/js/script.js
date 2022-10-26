$(document).on('mousemove', function(e){
    $('#follow').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$("#button").mouseover( function() {
  $("#follow").addClass("anime");
});

$("#button").mouseleave( function() {
  $("#follow").removeClass("anime");
});

// mouse collision
// var x = $("#div1").collision(".div2");