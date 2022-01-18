const { time } = require("console");
let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

console.log(
  "Let's create an array of 5 integers and check if it's ascendantly ordered."
);
rl.question("Enter the first number : ", function (nb1) {
  array.push(nb1);
  rl.question("Enter the second number :  ", function (nb2) {
    array.push(nb2);
    rl.question("Enter the third number :  ", function (nb3) {
      array.push(nb3);
      rl.question("Enter the four number :  ", function (nb4) {
        array.push(nb4);
        rl.question("Enter the five number :  ", function (nb5) {
          array.push(nb5);
          console.log("The new array is : ");
          console.log(array)
          let isAscending = (a) => a.slice(1).every((e, i) => e > a[i]);

          console.log(`Is this new array ascendant ? : ${isAscending(array)}`);
          rl.close;
        });
      });
    });
  });
});
