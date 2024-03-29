var buttons = document.querySelectorAll("button.drum");



for (let i = 0; i < buttons.length; i++) {
   // debugger;
   buttons[i].addEventListener("click", function(e){
      let target = e.target;
      let targetClass = target.classList[0];
      handleClick(targetClass);
   } );
   
}
document.addEventListener("keydown", function(e){
   let keyCode = e.key;
   handleClick(keyCode);

});

function handleClick(target) {
   buttonAnimation(target);
   switch (target) {
      case "w":
         var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
      case "a":
         var audio = new Audio("./sounds/tom-2.mp3");
         audio.play();
         break;
      case "s":
         var audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
      case "d":
         var audio = new Audio("./sounds/tom-4.mp3");
         audio.play();
         break;
      case "j":
         var audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break;
      case "k":
         var audio = new Audio("./sounds/snare.mp3");
         audio.play();
         break;
      case "l":
         var audio = new Audio("./sounds/crash.mp3");
         audio.play();
         break;
      default:  
   }
   
}

function buttonAnimation(key) {
  let pressedElement = document.querySelector('button.' + key);
   pressedElement.classList.add("pressed");
   setTimeout(() => {
      pressedElement.classList.remove("pressed");

   }, 500);
}