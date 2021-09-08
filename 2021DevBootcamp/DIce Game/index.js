let randomNumber1=Math.floor(Math.random()*6);
let randomNumber2=Math.floor(Math.random()*6);
let bank=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.getElementsByClassName("img1")[0].setAttribute("src",bank[randomNumber1]);
document.getElementsByClassName("img2")[0].setAttribute("src",bank[randomNumber2]);

if(randomNumber1>randomNumber2){document.getElementsByTagName("h1")[0].innerText="🚩 Player 1 Wins!"}
else if (randomNumber1===randomNumber2){document.getElementsByTagName("h1")[0].innerHTML="It's a tie! 🏳️"}
else {document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins! 🚩"}