// 2. When a number is entered, the focus moves to the next input field.
// 3. Pressing Backspace or Delete key removes the input of the current field, and the focus moves to the previous field.
// You can utilise methods like isNan(value), Element.focus(), Element.nextElementSibling and Element.previousElementSibling to make the above - mentioned features work.

// get all inputes
// add keyup event
// on keyup check if input length is 1
//--> then move front
// on keyup if key is backspace
// --> then move back and delete current

// let allInputes = document.querySelectorAll('.inputs');

// for (let i = 0; i < allInputes.length; i++) {
//    allInputes[i].addEventListener('keyup', function(e){
//       let currentInput = e.target;
//       if(e.target.)
//       if (e.target.value.length === 1 && !isNan(e.target.value)){
//          e.target.nextElementSibling.focus();
//       }

//    });   
// }

