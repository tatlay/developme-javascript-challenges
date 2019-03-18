// Create a function, min, that takes an array of numbers. Using .reduce() return the smallest number.

let min = values => {
	return values.reduce((acc, num) => {
		return (acc < num ? acc : num);
	}, values[0]);
};

console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, 4, -7, 5]), // -7
    min([-2, -4, -11, -4, -7, -5]), // -11
);
