//Create a class that represents a car

class Car {
	constructor(make, numberPlate) {
		this.make = make;
		this.numberPlate = numberPlate;
		this.mileage = 0;
	}

	getNumberplate() {
		return this.numberPlate;
	}

	getMake(){
		return this.make;	
	}	

	getMileage(){
		return this.mileage;
	}

	addJourney(value){
		this.mileage += value;
	}

}

// you pass in a make and number plate
let car = new Car("Ford", "XY11 4TY");

// you can get various bits of information about it
console.log(car.getNumberplate()); // "XY11 4TY"
console.log(car.getMake()); // "Ford"
console.log(car.getMileage()); // 0

// you can add journey
car.addJourney(100);
console.log(car.getMileage()); // 100

car.addJourney(200);
console.log(car.getMileage()); // 300