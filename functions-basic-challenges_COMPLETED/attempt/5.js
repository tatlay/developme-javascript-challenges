// Create a function, divide3, that takes three numbers as arguments. The function should return the first number divided by the second number divided by the third number.

//old school
let divide3 = function (a, b, c){
	return (a / b)/c;
}
console.log(divide3(8, 2, 2)); // 2
console.log(divide3(100, 20, 5)); // 1


//fat arrow
let fatArrowDivide3 = (a, b, c) => (a / b)/c

console.log(fatArrowDivide3(8, 2, 2)); // 2
console.log(fatArrowDivide3(100, 20, 5)); // 1