// var btns = document.querySelectorAll(".btn");

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function(e){
//       console.log(e.target);
//        let attrValue = e.target.getAttribute("btn-attr");
//        console.log(attrValue);
//     });
// }


// 1. fetches the data - color attribute of the card by double clicking on them
// 2. and attaches the fetched value(a color) as a class to that card.
// 3. Also changes the data - color attribute to "used".

// fetch all cards
//  let cardsList = document.querySelectorAll(".card");
//  console.log(cardsList);
// // add doubleclick via loop
// for (var i = 0; i < cardsList.length; i++) {
//    cardsList[i].addEventListener('dblclick', function(e){
//       // on dbclick callback handeler of particular card   read attribute value
//       console.log("On Double Click");
//       var dataAttr = e.target.getAttribute("data-color");
//       console.log(dataAttr);
//       // add style tag using the above value 
//       e.target.style.backgroundColor = dataAttr;
//       // update the data attribute
//       e.target.setAttribute("data-color","used");
//    });
// }

var delet_btns = document.querySelectorAll(".delete_button");
let delete_all_btn = document.getElementById("removeAll");

delete_all_btn.addEventListener("click", function(e){
   for (let i = 0; i < delet_btns.length; i++) {
      delet_btns[i].parentElement.remove();      
   }
});

for (let i = 0; i < delet_btns.length; i++) {
   delet_btns[i].addEventListener('click', function(e){
      e.target.parentElement.remove();
   });   
}
   



