const messageEL = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1;
    return randomCard;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

