var items = document.getElementById("myList");
items.addEventListener("click", function(event){
console.log(event.target.textContent);
});
console.log(items.childNodes.length);
console.log(items.children);
// var itemElements = document.getElementsByClassName("item");
// console.log(itemElements);
// console.log(itemElements.length);

// var divElement = document.getElementById("myDiv");
// divElement.classList.add("highlight");
// console.log(divElement.className);

// document.getElementById("myButton").addEventListener('click', function(event){
//    console.log(event.target.id);
// });
// var button = document.getElementById("myButton");
// button.addEventListener('mouseenter', function(){
//    console.log('Mouse Entered');
// });
// button.addEventListener('mouseleave', function(){
//    console.log('Mouse Leave');
// });
// button.disabled = true;
// console.log(button.disabled);

// var textElement = document.getElementById("myText");
// console.log(textElement.textContent);

// document.getElementById("myLink").addEventListener('click', function (event) {
//    event.preventDefault();
//    console.log("Link Clicked");
// });

// var input = document.getElementById("myInput");
// console.log(input.value);

