// Create a function, even, that takes a number as an argument. The function should return true if the number is even and false if it is odd.

// Write it without using the odd function
// Write it so it uses the odd function


let even = values => values % 3 === 1 ? false:true;
//changing the 3 to 1 and === to !==. 


console.log(even(1)); // false
console.log(even(2)); // true