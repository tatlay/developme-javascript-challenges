// -- Create a function, sumBoth, that takes two arrays of numbers as arguments. Return the sum of all the numbers from both arrays.

let adder = (value) => {
	let adder = 0
	for (let i = 0; i < value.length; i += 1) {
		adder += value[i];
	}
	return adder;
}

let sumBoth = (a,b) => {
		return adder(a) + adder(b);
};

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
);



