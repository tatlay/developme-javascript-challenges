// Create a function, odd, that takes a number as an argument. The function should return true if the number is odd and false if it is even.

let odd = value =>{
	return value % 2 !== 0 ? true : false;
	
}

console.log(odd(1)); // true
console.log(odd(2)); // false