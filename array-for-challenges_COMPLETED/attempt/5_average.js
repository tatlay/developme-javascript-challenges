// Create a function, average, that takes an array of numbers as an argument. Return the average value of all the numbers.


let average = values =>  {
	
	let sum = 0;
	for (let i = 0; i < values.length; i += 1) {
		sum += values[i] 
		}
	
	return sum / values.length;
};

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
);

// add all the numbers together and divide by total number in array

