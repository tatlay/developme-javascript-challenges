// Create a function, average, that takes an array of numbers as an argument. Using .reduce() return the average value of all the numbers.

let average = values => {
	return values.reduce((acc, num) =>{
		return (acc+num)/5;
	}, values[0]) ;
}

console.log(
    average([2, 3, 4, 5, 6]), // 4
);

// acc = 0
// num = 2
// average = 0 + 2

// acc = 2
// num = 3
// average = 2 + 3 = 5

// acc = 5
// num = 4
// average = 5 + 4 = 9

// acc = 9
// num = 5
// average = 9 + 5 = 14

// acc = 14
// num = 6
// average = 14 + 6 = 20

// acc = 
// num = 
// average = 
