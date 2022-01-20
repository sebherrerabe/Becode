// Write a function which receives a string in lowercase and returns an uppercase sentence.

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write you sentence :  ", (sentence) => {
  console.log(sentence.toLowerCase());
  rl.question("Convert to upper case ? -yes -no : ", (choice) => {
    if (choice === "yes") {
        console.log(sentence.toUpperCase())
    } else if (choice === "no") {
        console.log("bye bye !")
    } else {
        console.log("Unknown choice")
    }
    rl.close();
  });
});