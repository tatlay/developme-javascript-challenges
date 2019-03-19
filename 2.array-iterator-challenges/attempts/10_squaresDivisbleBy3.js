// Create a function, squaresDivisbleBy3, that takes an array of numbers as an argument. Using .map() and .filter() return a new array containing the squares of each number, but only if the square is divisible by 3.

let squaresDivisbleBy3 = values => {
	return values
		.map(val => val*val)
		.filter(val => val % 3 === 0 ? true : false);
	}


console.log(
    squaresDivisbleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);