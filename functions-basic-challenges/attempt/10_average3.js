// Create a function, average3, that takes three numbers as arguments. The function should return the average of the numbers.

// Hint: to work out the average of three numbers, just add them all together and divide by 3. You'll need to make sure you add the numbers first and then divide them by 3 - you can use a variable or brackets to do this.

// old school
let average3 = function (a,b,c) {
	return (a+b+c)/average3.length;
}
console.log(
    average3(1, 2, 3), // 2
);


//fat arrow
let fatArrowAverage3 = (a,b,c) => (a+b+c)/3;
console.log(
    fatArrowAverage3(1, 2, 3), // 2
);