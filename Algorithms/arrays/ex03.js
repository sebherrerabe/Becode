let integers = [];
let sum = 0;
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
  sum = sum + value;
}

let media = sum / integers.length;

console.log(`The minimum of this array is ${Math.min(...integers)}`);

console.log(`The media of this array is ${parseInt(media)}`);
