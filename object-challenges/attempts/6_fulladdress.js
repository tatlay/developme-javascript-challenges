// Create an object literal that represents an address - use different properties for each part of the address. It should have a fullAddress method, which will return the full address as a nicely formatted string.

(() => {

let address = {
	no: 1,
	street: "Made Up Street",
	town: "Bristol",
	postcode: "BS4 8TR",

	fullAddress () {
		return this.no+" "+this.street+" "+this.town+" "+this.postcode
	}
};

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

 
})();