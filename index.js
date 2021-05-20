//PLayer 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generate random number between 1 -6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //concantenate string with random number to set dice image
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //selects first image tag in DOM and sets image src

//Player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  //If player 2 wins
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  //If Draw
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
