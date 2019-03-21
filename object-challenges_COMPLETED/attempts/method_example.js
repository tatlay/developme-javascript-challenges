(() => {

	let basicMaths = {
	pi: 3.141592654,
	// object-style method (function)
	add(a, b) {
	return a + b;
	},
	// fat-arrow style method
	minus: (a, b) => a - b
	};
	console.log(basicMaths.add(1, 2)); // 3
	console.log(basicMaths.minus(1, 2)); // -1
	console.log(basicMaths.pi); // 3.141592654

 
})(); 