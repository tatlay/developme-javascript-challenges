// 1000 * 60 * 60 * 24 * 365.2425
let millisecondsPerYear = 31556952000;
let mark = {
	name: "Mark",
	birthdate: new Date("1984-04-16"),
	getAge() {

	let now = new Date();
	// this.birthdate is the birthdate property above
	let years = (now - this.birthdate) / millisecondsPerYear;
	return Math.floor(years);
	}
};

console.log(mark.getAge()); // 33