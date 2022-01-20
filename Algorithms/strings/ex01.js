// Write a function which receives two strings and returns them as one string.

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write phrase 1 :  ", (string1) => {
  rl.question("Write phrase 2 :  ", (string2) => {
    console.log(string1 + " " + string2);
    rl.close();
  });
});
