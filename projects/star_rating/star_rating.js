const starContainer = document.getElementById("star-container");
const allStars = document.querySelectorAll(".star");
const count = document.getElementById("count");
let starCount =0;

starContainer.addEventListener("mouseover" , function(event){
   const target = event.target;
   if (target.classList.contains("star")){
      let currentIndex = target.getAttribute("data-index");
      for (let i = 0; i < allStars.length; i++) {
         if(i+1 <= currentIndex){
            allStars[i].classList.add("star-filled");
         } else{
            allStars[i].classList.remove("star-filled")
         } 
      }
      starCount = currentIndex;
   }
});

starContainer.addEventListener("click" , function(event){
   const target = event.target;
   if (target.classList.contains("star")) {
      let currentIndex = target.getAttribute("data-index");
      for (let i = 0; i < allStars.length; i++) {
         if (i + 1 <= currentIndex) {
            allStars[i].classList.add("star-filled");
         } else {
            allStars[i].classList.remove("star-filled")
         }
      }
      starCount = currentIndex;
      count.innerText = starCount;
   }
});