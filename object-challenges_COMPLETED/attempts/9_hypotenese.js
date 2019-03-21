// Create a function, hypotenuse, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse.

let hypotenuse = (a,b) => {
	a = a*a;
	b = b*b;
	c = Math.sqrt(a+b);

	return c;	
}
console.log(
    hypotenuse(3, 4), // 5
);

//alternative way using Math.hypot()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot

let altHypotenuse = (a,b) =>{

	return Math.hypot(a,b);
}
console.log(
    altHypotenuse(3, 4), // 5
);

