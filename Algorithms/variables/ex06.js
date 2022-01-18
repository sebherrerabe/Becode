var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum(number) {
    console.log('Second since midnight = ', number);
}

rl.question('Enter the hours: ', function (hr) {
    rl.question('Enter the minutes: ', function (min) {
        rl.question('Enter the seconds: ', function (secs) {
        var nb1 = (parseFloat(hr) * 3600) + (parseFloat(min) + 60) + parseFloat(secs) ;

        processSum(nb1)

        rl.close();
    });
    });
});