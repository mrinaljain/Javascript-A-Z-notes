

// find the div and add click handler
// find if  target the button class was clicked.
// create 2 button elements
// remove button on click event
// add new button twice
// done

let buttonDiv = document.getElementById('doubleHolder');

buttonDiv.addEventListener('click', function (e) {
   if (e.target.classList.contains("double")){
      let b1 = document.createElement("button");
      b1.classList.add("double");
      b1.innerText = "double"
      let b2 = document.createElement("button");
      b2.classList.add("double");
      b2.innerText = "double"
      e.target.remove();
      buttonDiv.append(b1);
      buttonDiv.append(b2);
   }
   }, false);