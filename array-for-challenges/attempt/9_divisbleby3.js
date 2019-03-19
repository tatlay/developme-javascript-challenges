//Create a function, divisibleBy3, that takes an array of numbers. Return an array containing only the numbers that are divisible by 3.

let divisibleBy3 = values => {
	let eliminator = [];
	for (let i = 0; i < values.length; i += 1) {
		
			if (values[i] % 3 === 0){
			eliminator.push(values[i]);
			}	
	}
	return eliminator;
;}

console.log(
    divisibleBy3([1, 2, 3, 4, 5, 6]), // [3, 6]
    divisibleBy3([3, 4, 5, 9]), // [3, 9]
);