//Using store.html. When the "Store" button is pressed, the input field should be cleared and its value stored. When the "Display" button is pressed all previously submitted values should appear as a list underneath (each <li> should have a class of list-group-item). Nothing should be displayed until the "Display" button is pressed. This should work for any number of text submissions.

(d => {

let addButton = d.getElementById("add");
let displayButton = d.getElementById("display");
let input = d.getElementById("store");

let arr1 = [];

addButton.addEventListener("click", () => {
		arr1.push(input.value);
		console.log(arr1);
		input.value = "";  
});

displayButton.addEventListener("click", () => {
		arr1.forEach(values => {
		let li = d.createElement("li");
		li.classList.add("list-group-item");		
		li.textContent = values;
		list.appendChild(li);
		arr1 = [];
	});

});


})(document);

