var dice01 = Math.floor(Math.random() * 6) + 1,
dice02 = Math.floor(Math.random() * 6) + 1,
dice03 = Math.floor(Math.random() * 6) + 1;

console.log(dice01, dice02,dice03);

if (dice01 == dice02 == dice03) {
    console.log("Three dices are identical.")
} else if (dice01 != dice02 && dice02 == dice03) {
    console.log("Dice 2 and Dice 3 are identical.")
} else if (dice01 == dice02 && dice02 != dice03) {
    console.log("Dice 1 and Dice 2 are identical.")
} else if (dice01 == dice03 && dice02 != dice03) {
    console.log("Dice 1 and Dice 3 are identical.")
} else {
    console.log ("None of them are identical.")
}