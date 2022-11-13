let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


if (sum <= 20) {
    message = "do you want to draw a new card?";
} else if (sum === 21) {
    message = "blackjack gj";
    hasBlackJack = true;
} else {
    message = "youre out";
    isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);
console.log(message);