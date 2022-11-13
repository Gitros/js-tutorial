let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackJack = false;


if (sum <= 20) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("blackjack gj");
    hasBlackJack = true;
} else {
    console.log("youre out");
}

console.log(hasBlackJack);