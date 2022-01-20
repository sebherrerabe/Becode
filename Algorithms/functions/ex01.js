// An algorithm that uses a function sum and a function subs depending on the answer of the user

const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Variables

let nb1, nb2;

const suM = (t, n1, n2) => {
  t = n1 + n2;
  console.log(`The result of this sum is ${t}`);
};

const subS = (t, n1, n2) => {
  t = n1 - n2;
  console.log(`The result of this substraction is ${t}`);
};

console.log("Choose 2 numbers and decide if you want to add or substract them");

rl.question("Enter the first number : ", function (nb1) {
  nb1 = parseInt(nb1);
  console.log(nb1);
  rl.question("Enter the first number : ", function (nb2) {
    nb2 = parseInt(nb2);
    console.log(nb2);
    rl.question(
      "Addition or Substraction? : Answers: 1. 'Sum' - 2. 'Subs' :    ",
      function (mathAnswer) {
        total = 0;

        if (mathAnswer == "sum") {
          suM(total, nb1, nb2);
        } else if (mathAnswer === "subs") {
          subS(total, nb1, nb2);
        } else {
          console.log("Unknown anwser");
        }
        rl.close();
      }
    );
  });
});
