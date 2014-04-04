var p = 0;
var speed = 200;

function moveit() {
    p += 0.05;

    var r = 300;
    var xcenter = document.getElementById("logo").getBoundingClientRect().left;
    var ycenter = document.getElementById("logo").getBoundingClientRect().top*2;

    
    var newLeft = Math.floor(xcenter + (r* Math.cos(p)));
    var newTop = Math.floor(ycenter + (r * Math.sin(p)))/2;
    var newLeft1 = Math.floor(xcenter + -(r* Math.cos(p)));
    var newTop1 = Math.floor(ycenter + -(r * Math.sin(p)))/2;
    var newLeft2 = Math.floor(xcenter + (r* Math.sin(p)));
    var newTop2 = Math.floor(ycenter + -(r * Math.cos(p)))/2;
    var newLeft3 = Math.floor(xcenter + -(r* Math.sin(p)));
    var newTop3 = Math.floor(ycenter + (r * Math.cos(p)))/2;
    
    $('#friends').animate({
            top: newTop,
            left: newLeft,
        }, speed, function() {
            moveit()
                });
    $('#friends2').animate({
        top: newTop1,
        left: newLeft1,
    },speed, function() {
        moveit();
    });
    
    $('#friends3').animate({
                           top: newTop2,
                           left: newLeft2,
                           },speed, function() {
                           moveit();
                           });
    
    $('#friends4').animate({
                           top: newTop3,
                           left: newLeft3,
                           },speed, function() {
                           moveit();
                           });
 }
$(document).ready(function() {
    moveit();    
});