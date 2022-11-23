const messageEL = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "per",
    chips: 145
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1;

    if (randomCard > 10) {
        return 10;
        
    } else if ( randomCard === 1){
        return 11;
    }else {
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;

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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}

// 

let dayOfMonth = 13;
let weekday = "friday";

if (dayOfMonth === 13 && weekday ==="friday") {
    console.log("😶");
}