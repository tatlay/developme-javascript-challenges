// Create a class that represents a light switch
class Lightswitch {
	constructor(){
		this.status = false;
	}

	turnOn(){
		this.status = true; 
	}

	turnOff(){
		this.status = false; 
	}

	isOn(){
		return this.status;
	}

}

let lightswitch = new Lightswitch();

// you can turn it on
lightswitch.turnOn();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();

console.log(lightswitch.isOn()); // false