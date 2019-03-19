// Create a function, min, that takes an array of numbers. Return the smallest number.

let min = values =>  {
	let smallest = values[0];

	for (let i = 0; i < values.length; i += 1) {
		let current = values[i];
		if (current < smallest) {
			smallest = current;
		}
	}
	return smallest;
};


console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, -7, 5]), // -7
    min([-2, -4, -11, -8, -4, -7, -5]), // -11
);