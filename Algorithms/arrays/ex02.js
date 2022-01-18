let integers = [5, 6, 18, 22, 16, 2, 3, 92, 152, 151];
let sum = 0;

for (let i = 0; i < integers.length; i++) {
  const value = integers[i];
  console.log(value);
  sum = sum + value;
}

let media = sum / integers.length;

console.log(`The maximum of this array is ${Math.max(...integers)}`);

console.log(`The media of this array is ${parseInt(media)}`);