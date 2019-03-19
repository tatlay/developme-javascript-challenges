// Create a function, oddSquares, that takes an array of numbers as an argument. Using .map() and .filter() return a new array containing the squares of each number, but only if the square is odd.

let oddSquares = values => {
	return values
		.map(val => val*val)
		.filter(val => val % 2);
	}

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
);
