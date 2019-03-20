// Create a function, stone, that takes a weight in kg and converts it to stone

//old school
let stone = function (weight) {
	return weight / 6.35;
}

console.log(
    stone(74), // 11.653
    stone(50), // 7.87365
);

//fat arrow
let fatArrowStone = weight => weight / 6.35;

console.log(
    fatArrowStone(74), // 11.653
    fatArrowStone(50), // 7.87365
);