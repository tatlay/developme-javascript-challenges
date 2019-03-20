// Create a function, names, that takes an array of objects as an argument. Return a string containing all of the object names separated by a comma.

(() => {

let names = person => {
	return person.map(val => val.name); 
}



    let a = { name: "Alice", age: 52 };
    let b = { name: "Bob", age: 34 };
    let c = { name: "Charlie", age: 24 };

    let people = [a, b, c];

    console.log(
        names(people), // "Alice, Bob, Charlie"
    );
})();