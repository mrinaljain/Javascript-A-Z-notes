// find deleteAll button
// add click event listener
// remove all li onn clicl
// find all delete  buttons 
// add a listenr 
// nearest parent  li
let deleteAllButton = document.getElementById("all");
let deleteLiButton = document.querySelectorAll("li button");

deleteAllButton.addEventListener('click', function (e) {
   for (let i = 0; i < deleteLiButton.length; i++) {
      deleteLiButton[i].closest('ul').style.display = 'none';
   }
});

for (let i = 0; i < deleteLiButton.length; i++) {
   deleteLiButton[i].addEventListener('click', function (e) {
      e.target.closest('li').style.display = 'none';
   });
}
