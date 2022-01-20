// Write a function which receives a character in uppercase and prints it in lowercase.

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write you sentence :  ", (sentence) => {
  console.log(sentence.toUpperCase());
  rl.question("Convert to lower case ? -yes -no : ", (choice) => {
    if (choice === "yes") {
        console.log(sentence.toLowerCase())
    } else if (choice === "no") {
        console.log("bye bye !")
    } else {
        console.log("Unknown choice")
    }
    rl.close();
  });
});
