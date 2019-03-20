// Create a function, helloYouTwo, that takes two strings as arguments. The function should return the string "Hello first-name and last-name".

let helloYouTwo = function (firstName, LastName){
	return "Hello"+" "+firstName+" "+LastName;
}

console.log(helloYouTwo("Alice", "Bob")); // "Hello Alice and Bob"
console.log(helloYouTwo("Carol", "Dylan")); // "Hello Carol and Dylan"


//far arrow

let fatArrowhelloYouTwo = (firstName, LastName) => "Hello"+" "+firstName+" "+LastName;
console.log(fatArrowhelloYouTwo("Alice", "Bob")); // "Hello Alice and Bob"
console.log(fatArrowhelloYouTwo("Carol", "Dylan")); // "Hello Carol and Dylan"

