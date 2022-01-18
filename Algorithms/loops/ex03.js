// Write an algorithm which throws a dice a given number of times 
// and count the number of times a certain number is received.

const { time } = require('console');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of times to throw the dice: ', function (timesDice) {
    var dices = [];
    for (let i = 0; i < timesDice; i++) {
        dices[i] = Math.floor(Math.random() * 6) + 1;
        console.log(dices[i])
    }
    rl.question('Number to find: ', function (receivedNB) {
        var count = 0
        for(let e = 0; e < dices.length; e++){
            if(dices[e] == receivedNB) {
                count++;
            }
        }
        console.log(`The number has been found ${count} times`)
        rl.close();
    });
});