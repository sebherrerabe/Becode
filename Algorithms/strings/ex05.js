// Write a function which receives a sentence full of whitespace and returns it without them.

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrangeName = (string) => {
    string = string.split(' ')
    finalMessage = ''
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        finalMessage = finalMessage + string[i];
    }
    console.log(finalMessage)
}

rl.question("Write you sentence :  ", (sentence) => {
    arrangeName(sentence);
    rl.close();
})
