var x = 0;
 var image = document.getElementById("image-slide");
var imageNumber = ["img/sing1.jpg", "img/sing2.jpg", "img/sing3.jpg", "img/sing4.jpeg", "img/sing5.jpg"]
function repeat() {
    setInterval(slide, 10000);  
};


function slide() {
    //announcementconsole.log("hit");
   var a = document.getElementById("switch");

  if(x >= imageNumber.length){
       x = 0;
  }
    else {
        a.setAttribute("src", imageNumber[x]);
        x++
        ///console.log(x);
    };
}  

window.document.onload = repeat();