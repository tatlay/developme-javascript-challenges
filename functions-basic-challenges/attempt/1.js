// Create a function, concat, that takes two strings as arguments. The function should return the two strings joined together with a space in between.

//fat arrow
let concat = (a,b) => {
	return a+ " " +b;
}

//old school
let oldConcat = function (a, b) {
	return a+ " " +b;
};


console.log(concat("fish", "sticks")); // "fish sticks"
console.log(concat("hello", "world")); // "hello world"

console.log(oldConcat("Old", "School")); // "fish sticks"