var slideImg = document.getElementById("slideImg");

var images = new Array(
   "dom-hill-nimElTcTNyY-unsplash.jpg",
    "P1.jpg",
    "dom.jpg",
    "Drip1.jpg",
    "Drip2.jpg",
    
);

var len = images.length;
var i = 0

function slider(){
    if (i > len-1) {
        i = 0
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',300);
} 