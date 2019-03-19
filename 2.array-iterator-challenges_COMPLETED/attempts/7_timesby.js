// Create a function, timesBy, that takes an array of numbers and a number as arguments. Using .map() return a new array containing each number in the array multiplied by the value of the second argument.

let timesBy = (values, multiplier) => {

	return values.map(val => val*multiplier);

};

console.log(
    timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
    timesBy([2, 3, 4, 5, 6], 5), // [10, 15, 20, 25, 30]
    timesBy([2, 3, 4, 5, 6], -5), // [-20, -15, -20, -25, -30]
    timesBy([-2, -3, -4, -5, -6], -5), // [20, 15, 20, 25, 30]
);