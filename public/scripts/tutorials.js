
function togglecollapse(id) {

    var coll = document.getElementsByClassName("collapsible");
    var coll = coll[id];
 
    coll.classList.toggle("active-collapsible");
      
    if (coll.nextElementSibling.style.height) {
      coll.nextElementSibling.style.height = null;
    } else {
      coll.nextElementSibling.style.height = coll.nextElementSibling.scrollHeight + "px";
    }
 //got this from w3schools, thanks!
 }
 
 function widecontent(id) {
 
   
   var content = document.getElementsByClassName("content");
   var content = content[0];
 
   content.classList.toggle("wide-content");
 
   var img1 = document.getElementsByClassName("wcb—img-wide");
   var img2 = document.getElementsByClassName("wcb—img-small");
   var img1 = img1[id];
   var img2 = img2[id];
 
   img1.classList.toggle("hidden");
   img2.classList.toggle("hidden");
 
   var coll = document.getElementsByClassName("collapsible");
   var coll = coll[id];
   
   coll.nextElementSibling.style.height = "fit-content";
 
   
  
 
 }
 window.addEventListener("transitionend",function(){
   i=0;
   var coll = document.getElementsByClassName("active-collapsible");
   while (i<coll.length) {
 
     console.log("Transition End Detected. Active Element Number: " + i + " of Count: " + coll.length);
     var coll = coll[i];
     coll.nextElementSibling.style.height = "fit-content";
     coll.nextElementSibling.style.height = coll.nextElementSibling.scrollHeight;
 
     i += 1;
 
   }
 });
 
 window.addEventListener("resize",function(){
   i=0;
   var coll = document.getElementsByClassName("active-collapsible");
   while (i<coll.length) {
 
     console.log("Window Resize Detected. Active Element Number: " + i + " of Count: " + coll.length);
     var coll = coll[i];
     coll.nextElementSibling.style.height = "fit-content";
     coll.nextElementSibling.style.height = coll.nextElementSibling.scrollHeight;
 
     i += 1;
 
   }
 });
 
 function imgCentralization() {
 
   i=0;
   img=document.getElementsByTagName("img");
   while (i<img.length) {
     if (img[i].classList[0] != "wcb—img-wide") {
       test1=true;
     } else {test1=false;}
     if (img[i].classList[0] != "wcb—img-small") {
       test2=true;
     } else {test2=false;}
     if (test1==true && test2==true) {
       console.log(img[i].classList[0]);
       console.log(img[i]);
 
       img[i].style.marginLeft = "calc(50% - " + img[i].clientWidth + "px/2)";
     }
     i += 1;
   }
 //w3schools is helping big time with javascript, thanks!
 
 }