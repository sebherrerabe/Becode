var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    console.log('The surface of your circle is', number);
}

rl.question('Enter the radius: ', function (radius) {
        var nb1 = (parseFloat(radius) * parseFloat(radius)) * 3.14 ;

        processSum(nb1)

        rl.close();
});