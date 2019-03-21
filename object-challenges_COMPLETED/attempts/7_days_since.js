// Create a function, daysSince, that you pass a date. It should tell you how many days have passed since that date:

let daysSince = value => {
	let now = new Date();
	let then = new Date(value); 
	
	return Math.floor((now-then)/1000/60/60/24);

}


console.log(
    daysSince("1984-04-16"), // 12 thousand and something
);