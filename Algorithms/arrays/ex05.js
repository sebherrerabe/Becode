// Write a algorithm which receives an array of integers and check if its ordered ascendantly.
//  Print true if the array is ordered, false if it’s not.

let array1 = [1,2,3,4,5];
array2 = [1,3,4,6,2]

console.log(`This is array 1 : [${array1}]`)
console.log(`This is array 2 : [${array2}]`)

let isAscending = a => a.slice(1)
                        .every((e,i) => e > a[i]);
                        
console.log(`Is array 1 ascendant ? : ${isAscending(array1)}`);
console.log(`Is array 2 ascendant ? : ${isAscending(array2)}`);

