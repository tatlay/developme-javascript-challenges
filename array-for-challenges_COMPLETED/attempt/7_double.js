// Create a function, double, that takes an array of numbers as an argument. Return a new array containing each number doubled.

let double = values =>  {
	
	for (let i = 0; i < values.length; i += 1) {
		values[i] = values[i] * 2;
		}
	
	return values;
};

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);