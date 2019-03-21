let addClassto = (class, valid) => {

let addedEl = addClassTo("col-md-12", ".js__first-list");
console.log(addedEl); // the <ul> - should have the new class

let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
console.log(addNoError); // null

}();
