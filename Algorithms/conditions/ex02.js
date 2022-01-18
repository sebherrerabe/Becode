let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question('Enter first number: ', function (nb1) {
    rl.question('Enter second number: ', function (nb2) {
        rl.question('Enter third number: ', function (nb3) {
        let maxN = Math.max(nb1,nb2,nb3)
        console.log(`The highest number is ${maxN}`)
        rl.close();
    });
    });
});