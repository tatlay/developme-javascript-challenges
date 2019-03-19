// Create a function, oddSquares, that takes an array of numbers as an argument. Return a new array containing the squares of each number, but only if the square is odd.

let oddSquares = values => {
	let eliminator = [];
	for (let i = 0; i < values.length; i += 1) {
		values[i] = values[i] * values[i]
			
			if (values[i] % 2 !==0){
			eliminator.push(values[i]);
			}	
	}
	return eliminator;
}


console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
    oddSquares([2, 3, 4]), // [9]
);



