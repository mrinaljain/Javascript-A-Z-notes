let gamePattern =[];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
function nextSequence() {
   let randomNumber = Math.floor(Math.random() * 3) + 1;
   return randomNumber;
}

$(randomChosenColour).
console.log(gamePattern);

