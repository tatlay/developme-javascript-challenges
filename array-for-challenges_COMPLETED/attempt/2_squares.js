//Create a function, squares, that takes an array of numbers as an argument. Return a new array containing the square of each number.

//for loop version

let squares = values => {
	for (let i = 0; i < values.length; i += 1) {
		values[i] = values[i] * values[i]; 
	}
	return values;
};

console.log(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);


//map

let squares_map = values => {
    return values.map(val => val*val);
};

console.log(
    squares_map([2, 3, 4]), // [4, 9, 16]
    squares_map([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);