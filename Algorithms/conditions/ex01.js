const fullTariff = "10€",
reducedTariff = "8€";

let allowed = false;

const prompt = require("prompt-sync")();

const age = prompt("What is your age ? ");


if (age < 18) {
	allowed = true;
} else {
    allowed = false;
}

if (allowed == true) {
    console.log(`Your price is ${reducedTariff}`)
} else {
    console.log(`Your price is ${fullTariff}`)
}



