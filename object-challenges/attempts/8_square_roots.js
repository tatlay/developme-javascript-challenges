// Create a function, roots, that takes an array of numbers. The function should return an array of the square roots of each number:

let roots = values => values.map(val => Math.sqrt(val));

console.log(roots([4, 16, 2500]), // [2, 4, 50]
);