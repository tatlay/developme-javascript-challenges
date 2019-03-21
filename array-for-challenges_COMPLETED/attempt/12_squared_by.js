// Create a function, squaresDivisbleBy3, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is divisible by 3.

let squaresDivisibleBy3 = values => {
	let eliminator =[];
	for (let i = 0; i < values.length; i += 1) {
		values[i] = values[i] * values[i]; 

		if (values[i] % 3 === 0){
			eliminator.push(values[i]);
			}
			
	}
	return eliminator;
}

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);