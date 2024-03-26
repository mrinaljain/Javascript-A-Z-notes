// create 2 random numbers for 2 diffrert players
//  floor of random * 6 + 1
// now based on the number recived append it with image name and update bothe the players image
// also based on p1 p2 score update the header string accordingly
// handel the tie senario also


let playerOneDicee = document.querySelector(".img1");
let playerTwoDicee = document.querySelector(".img2");
let resultText = document.querySelector("h1");

var player1Score = Math.floor(Math.random() * 6) + 1;
var player2Score = Math.floor(Math.random() * 6) + 1;


setImageUrl(playerOneDicee, player1Score);
setImageUrl(playerTwoDicee,player2Score);

if(player1Score == player2Score){
   resultText.innerText = "Game Tie"
}
else if(player1Score > player2Score){
   resultText.innerText = "Player 1 won"
}
else{
   resultText.innerText = "Player 2 won"
}


function setImageUrl(player , score) {
   let imageUrl = './images/dice' + score + '.png';
   player.setAttribute('src' , imageUrl);
}

