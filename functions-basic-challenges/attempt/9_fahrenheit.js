// Create a function, fahrenheit, that takes a temperature in Celsius and converts it to Fahrenheit

// old school
let fahrenheit = function (value){
	return (value * 1.8) +32;  
}

console.log(
    fahrenheit(12), // 53.6
);


//fat arrow;
let fatArrowFahrenheit =  value => (value * 1.8) +32;  
console.log(
    fatArrowFahrenheit(12), // 53.6
);