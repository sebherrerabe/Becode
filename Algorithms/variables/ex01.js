const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


  const prompt = require("prompt-sync")();

  const country = prompt("What is your country? ");

  const city = prompt("What is your city? ");
  
  console.log(`Oh, so you live in ${city}, ${country}`);
