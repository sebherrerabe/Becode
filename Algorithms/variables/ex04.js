
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    console.log('The price is + VAT = ', number);
}

rl.question('Enter your price: ', function (price) {
        var nb1 = (parseFloat(price) * 0.21) + parseFloat(price) ;

        processSum(nb1)

        rl.close();
});