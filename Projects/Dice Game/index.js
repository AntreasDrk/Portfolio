let randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
let randomNumber2 = Math.floor(Math.random() * 6 + 1); //1-6

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //sets the src attribute to a random image/dice1.png - image/dice6.png
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //sets the src attribute to a random image/dice1.png - image/dice6.png

if (randomNumber1 > randomNumber2) { // if player 1 wins annaounce him winner
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!"
} else if (randomNumber1 == randomNumber2){ // if player1 and player2 have the same value give them a draw
  document.querySelector("h1").innerHTML = "Draw!!"

} else { // if player2 has greater value than player1 he's the winner
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!"
}