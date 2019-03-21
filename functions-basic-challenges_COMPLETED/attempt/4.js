// Create a function, product, that takes two numbers as arguments. The function should return the first number multiplied by the second number.

let product = function (a,b){
	return a*b;
}

console.log(product(8, 2)); // 16
console.log(product(100, 5)); // 500

//fat Arrow
let fatArrowProduct = (a,b) => a*b;

console.log(fatArrowProduct(8, 2)); // 16
console.log(fatArrowProduct(100, 5)); // 500