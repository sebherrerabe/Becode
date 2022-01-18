// Write an algorithm which prints all the even numbers from 0 to a given number.

const prompt = require("prompt-sync")();

const nb = prompt("Write a number:  ");

for (let i = 1; i <= nb; i++) {
    if (i % 2 == 0) {
      console.log(i)
    } 
  }
