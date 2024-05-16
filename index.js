const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline=document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove",function(e){

    const posX=e.clientX;
    const posY=e.clientY;
    
    cursorDot.style.left=`${posX}px`;
    cursorDot.style.top=`${posY}px`;


    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`

    },{duration:500,fill:"forwards"});
    

})
var video = document.getElementById("myVideo");


function myFunction() {
  if (video.paused) {
    video.play();
    
  } else {
    video.pause();
   
  }
}