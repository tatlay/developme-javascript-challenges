//Create a function, sumBoth, that takes two arrays of numbers as arguments. Using .reduce() return the sum of all the numbers from both arrays.

let adder = (arr1) => arr1.reduce((acc,num) => (acc+num),0)

let sumBoth = (a,b) => {
		return adder(a) + adder(b);
};


console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
);


