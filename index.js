const messageEL = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");

let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    let card = 7;
    sum += card;
    renderGame();
}

// arrays ordered lists of items

let featuredPosts = ["Check out my netflix clone", 
"Here's code for my project",
"I've just relunched my portfolio"
];

let experience = ["Chief at restaurant `Piccolo Ropczyce`",
"ZSAT Ropczyce",
"driver's license cat. B, Technic Informatic",
"Using js, CSS, HTML, PHP, MYSQL"
];
console.log(experience[1]);
console.log(experience[2]);