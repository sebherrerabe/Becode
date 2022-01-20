// Write a function which receives a name in this format "Doe, John" 
// an returns it in this format "John Doe"

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrangeName = (string) => {
    string = string.split(',')
    console.log(string[1] + ' ' + string[0])
}

rl.question("Write you sentence :  ", (sentence) => {
    arrangeName(sentence);
    rl.close();
})
