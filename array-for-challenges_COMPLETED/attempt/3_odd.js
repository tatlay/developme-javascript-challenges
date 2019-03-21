//Create a function, odd, that takes an array of numbers. Return an array containing only the odd numbers.


let odd = values => {
	result =[];
    for (let i = 0; i < values.length; i += 1) {
		if ((values[i] % 2) !== 0) {
            result.push(values[i]);
        }
	}
		return result;
};

console.log(
    odd([1, 2, 3]), // [1, 3]
    odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);


// let odd = values => {
//     return values.filter(val => val % 2);

// };

// console.log(
//     odd([1, 2, 3]), // [1, 3]
//     odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
// );