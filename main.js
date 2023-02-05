//Navbar
let beforeScroll = window.pageYOffset;
window.onscroll = function() {
let currentScroll = window.pageYOffset;
  if (beforeScroll > currentScroll) {
    document.getElementById("navv").style.top = "0";
  } else {
    document.getElementById("navv").style.top = "-100px";
  }
  beforeScroll = currentScroll;
}

// Hero en js 
let i = 0;
let img = [];
let time = 5000;

img[0] = 'hero1.jpg';
img[1] = 'hero3.jpg';
img[2] = 'hero4.jpg';
img[3] = 'hero6.jpg';


function changeImg() {
    document.slider.src = img[i];

    if(i < img.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


