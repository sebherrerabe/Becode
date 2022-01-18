// Write an algorithm which verify if a given positive integer is a perfect number,
//  meaning equal to the sum of his divisors (except himself).

const prompt = require("prompt-sync")();

let nb = prompt(`Write a number: `);

const toInt = () => {
   nb = parseInt(nb)
}

let count = 0;

for (let i = 1; i < nb; i++) {
   toInt()
  if (nb % i === 0) {
    count = count + i;
  }
}
if (count === nb) {
   console.log("It's a perfect number");
 } else {
   console.log("It's not a perfect number");
 }