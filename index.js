var number= document.querySelectorAll(".drum").length;
for (var i = 0; i<number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",press);
  function press(){
    var drum = this.innerHTML;
    playdrum(drum);
    buttonAnimation(drum);
  }

  document.addEventListener("keypress",function(event){
     playdrum(event.key);
     buttonAnimation(event.key);
  });


  function playdrum(key){
    switch (key) {
      case "w":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;
      case "a":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;
      case "s":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
         break;
      case "d":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
          break;
      case "j":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
      case "k":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;
      case "l":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;
      default:
         console.log(drum);

    }
  }
  function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");

    setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
    },100);

  }
}
