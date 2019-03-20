// Create a function, total, that takes an array of shopping item objects and adds their price together.

// Hint: numbers have a .toFixed(n) method which rounds the number to the given number of decimal places and returns a string
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

(() => {

let total = items => {
    return items.reduce((acc, num) => {
        return acc + num.price;
    }, 0).toFixed(2);
};

    let shoppingList = [{
        name: "coffee",
        price: 3.50,
    }, {
        name: "tea",
        price: 2.50,
    }, {
        name: "toblerone",
        price: 3.20,
    }, {
        name: "newspaper",
        price: 0.10,
    }];

    console.log(
        total(shoppingList), // "9.30"
    );
})();