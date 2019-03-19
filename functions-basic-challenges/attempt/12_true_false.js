// From this point on, just use => to write your functions.
// Create a function, divisibleBy3, that takes a number as an argument. The function should return true if the number is divisible by 3 and false if it isn't.


let divisibleBy3 = value => {
	if (value === 3)
		return true;
	else
		return false;
}

console.log(divisibleBy3(3)); // true
console.log(divisibleBy3(4)); // false

//ternary
let ternaryDivisibleBy3 = value => value === 3 ? true:false;

console.log(ternaryDivisibleBy3(3)); // true
console.log(ternaryDivisibleBy3(4)); // false
