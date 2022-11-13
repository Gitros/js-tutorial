let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("you win");
} else if (sum > 21) {
    console.log("youre out of the game");
}