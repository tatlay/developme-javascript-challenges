// Create a function, divide, that takes two numbers as arguments. The function should return the first number divided by the second number.

let divide = function (a,b){
	return a/b;
}

console.log(divide(4, 2)); // 2
console.log(divide(20, 2)); // 10


//fat arrow
let fatArrowDivide = (a,b) => a/b;

console.log(fatArrowDivide(4, 2)); // 2
console.log(fatArrowDivide(20, 2)); // 10
