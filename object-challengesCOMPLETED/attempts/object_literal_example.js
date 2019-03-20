// an empty object
let empty = {};
// an object representing and address
let address = {
number: 54, // assign the value 54 to the property "number"
road: "Park Street",
postcode: "BS5 9LD",
};
// an object representing a person
let person = {
name: "Kofi",
address: address, // using the address object from above
favouriteColours: ["purple", "green"],
};

console.log(address.number); // 54
console.log(person.name); // "Kofi"
console.log(address["number"]); // 54 - using array style