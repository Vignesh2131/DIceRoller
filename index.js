//FOR DICE ONE//

var randomVariable1 = Math.floor(Math.random() * 6) + 1; //for creating random variable from 0-6//

var randomDiceImage = "dice" + randomVariable1 + ".png"; //for selecting the dice image//

var randomImageSrc = "images/" + randomDiceImage; //for selecting the dice from source folder//

var image1 = document.querySelectorAll("img")[0]; //selecting the image element from html//

image1.setAttribute("src", randomImageSrc); //manipulating the img attribute using setAttribute function//

//FOR DICE TWO//

var randomvariable2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomvariable2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//TO CHANGE HEADING//

if (randomVariable1 > randomvariable2) {
    document.querySelector("h3").textContent = "Player 1 won";
} else if(randomVariable1<randomvariable2) {
    document.querySelector("h3").textContent = "Player 2 won";
} else {
    document.querySelector("h3").textContent="DRAW !"
}
