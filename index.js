const messageEL = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
let firstCard = 10;
let secondCard = 4;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "do you want to draw a new card?";
    } else if (sum === 21) {
        message = "blackjack gj";
        hasBlackJack = true;
    } else {
        message = "youre out";
        isAlive = false;
    }
    messageEL.textContent = message;
}