// Create a function, merge, that takes two arrays as arguments. It should return a new array containing the elements of both arrays.


let merge = (a,b) => [...a, ...b];

console.log(
    merge([2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12]), // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);





// let odd = [3, 5, 7, 9];
// let even = [4, 6, 8];
// let mergedOddEven = [...odd, ...even]; // [3, 5, 7, 9, 4, 6, 8]
// let mergedEvenOdd = [...even, ...odd]; // [4, 6, 8, 3, 5, 7, 9]

// console.log(mergedOddEven);
// console.log(mergedEvenOdd);