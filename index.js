


var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var m = "images/dice" + randomNumber1 + ".png"
// var l = m.toString()
var p = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", m);
document.querySelectorAll("img")[1].setAttribute("src", p);


if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏈 Player 1 Wins!!";
} else {
  document.querySelector("h1").innerHTML = "⚽️ Player 2 Wins!!";
}
