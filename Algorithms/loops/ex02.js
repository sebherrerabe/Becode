// Write an algorithm which receives an random integer and prints from 0 to it.

let ranNB = Math.floor(Math.random() * 40) + 1;

console.log(`Random number is ${ranNB}`)

for (let i = 0; i < ranNB; i++) {
    console.log(i)
}