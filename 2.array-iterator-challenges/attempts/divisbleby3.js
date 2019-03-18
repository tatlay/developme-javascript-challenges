//Create a function, divisibleBy3, that takes an array of numbers. Using .filter() return an array containing only the numbers that are divisible by 3.

let divisibleBy3 = values => {
	return values.filter(val => val % 3 === 0);
;}

console.log(
    divisibleBy3([1, 2, 3, 4, 5, 6]) // [3, 6]
);


// let numbers = [1, 2, 3, 4, 5, 6];
// // iterates over an array passing each value into the supplied function
// // removes any items that the function returns false for
// let evenNumbers = numbers.filter(val => val % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]