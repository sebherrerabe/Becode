let integers = [];
let randomN;

const getRandom = () => {
  randomN = Math.floor((Math.random() * 100000) + 1);
};

for (let i = 0; i < 10; i++) {
  getRandom();
  integers.push(randomN)
}
for (let i = 0; i < integers.length; i++) {
    const value = integers[i];
    console.log(value);
  }

let minValue = Math.min(...integers)

console.log(`The minimum of this array is ${minValue}`)
console.log(`The position of the min of this array is ${integers.indexOf(minValue)}`)