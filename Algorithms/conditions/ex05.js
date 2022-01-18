const prompt = require("prompt-sync")();

const copies = prompt("Write number of copies:  ");

if (copies <= 10) {
    console.log("The price is 0.12€")
} else if (copies <= 20) {
    console.log("The price is 0.11€")
} else {
    console.log("The price is 0.10€")
}