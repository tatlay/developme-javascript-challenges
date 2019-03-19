// Create a function, max, that takes an array of numbers. Return the largest number.

let max = values =>  {
	let biggest = values[0];

	for (let i = 0; i < values.length; i += 1) {
		let current = values[i];
		if (current > biggest) {
			biggest = current;
		}
	}
	return biggest;
};

console.log(
    max([2, 4, 6, 4, 7, 5]), // 7
    max([-2, 4, 6, 4, 2, -7, 5]), // 6
    max([-2, -4, -4, -7, -5]), // -2
);




