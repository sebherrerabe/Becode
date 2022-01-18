// Write an algorithms which receives an integers n and prints:

const prompt = require("prompt-sync")();

const nb = prompt("Write a number:  ");

// the numbers from 1 to n

for (let i = 1; i <= nb; i++) {
    console.log(i) 
    if (i == nb) {
        console.log("                ")
    }  
}

// the numbers from 1 to n in descending order

for (let e = nb; e >= 1; e--) {
    console.log(e)    
    if (e == 1) {
        console.log("                ")
    }  
}

// the numbers from -n to n

for (let u = -nb; u <= nb; u++) {
    console.log(u)
    if (u == nb) {
        console.log("                ")
    }  
}

// the odd numbers from 1 to n

for (let o = 1; o <= nb; o++) {
    if (o % 2 != 0) {
      console.log(o)
    } 
  }
