var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    console.log('The sum is', number);
}

rl.question('Enter a number: ', function (x) {
    rl.question('Enter another number: ', function (y) {
        var sum = parseFloat(x) / parseFloat(y);

        processSum(sum)

        rl.close();
    });
});