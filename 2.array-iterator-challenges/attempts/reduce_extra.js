// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
 
let alert = function getAverageAge(users){
	users.reduce ((acc, num) =>{
		return john + pete + mary /3; 
	}, arr[0]);

}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28