const prompt = require("prompt-sync")();

const nameUser = prompt("What is your name? ");

const NAME = "John Doe"

if (NAME == nameUser) {
	console.log(`Yes, I am ${NAME}`)
} else {
	console.log(`No, I am not ${NAME}`)
}