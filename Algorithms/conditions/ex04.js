const prompt = require("prompt-sync")();

const dayNumber = prompt("Select a number between 1-7 and I'll give you the name of the day. ");

if (dayNumber == 1) {
    console.log("Monday")
} else if (dayNumber == 2) {
    console.log("Tuesday")
} else if (dayNumber == 3) {
    console.log("Wednesday")
} else if (dayNumber == 4) {
    console.log("Thursday")
} else if (dayNumber == 5) {
    console.log("Friday")
} else if (dayNumber == 6) {
    console.log("Saturday")
} else if (dayNumber == 7) {
    console.log("Sunday")
}