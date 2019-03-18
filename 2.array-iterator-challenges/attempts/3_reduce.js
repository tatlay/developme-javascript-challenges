//Create a function, max, that takes an array of numbers. Using .reduce() return the largest number.

let max = values => {
    return values.reduce((acc, num) => {
    	return (acc > num ? acc : num);

    }, values[0]);

};

console.log(
    max([2, 4, 6, 4, 7, 5]), // 7
    max([-2, 4, 6, 4, -7, 5]), // 6
    max([-2, -4, -6, -4, -7, -5]), // -2
);