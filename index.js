let firstCard = 10;
let secondCard = 7;

let sum = firstCard + secondCard;

if (sum <=20) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("blackjack gj");
} else {
    console.log("youre out");
}