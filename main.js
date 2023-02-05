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


//Jason Skills

let skills = '{ "skills" : [' +
'{ "html":"80%"},' + '{"css":"65%" },' +
'{ "javascript":"60%"},' + '{"python":"90%" },' +
'{ "java":"75%"},' + '{ "excel":"95%"},' + '{ "c":"70%"}]}';

let obj = JSON.parse(skills);

document.getElementById("html").innerHTML =
'HTML:' + ' ' + obj.skills[0].html;

document.getElementById("css").innerHTML =
'CSS:' + ' ' + obj.skills[1].css;

document.getElementById("javascript").innerHTML =
'JavaScript:' + ' ' + obj.skills[2].javascript;

document.getElementById("python").innerHTML =
'Python:' + ' ' + obj.skills[3].python;

document.getElementById("Java").innerHTML =
'Java:' + ' ' + obj.skills[4].java;

document.getElementById("excel").innerHTML =
'Excel:' + ' ' + obj.skills[5].excel;
document.getElementById("c").innerHTML =
'C:' + ' ' + obj.skills[6].c;