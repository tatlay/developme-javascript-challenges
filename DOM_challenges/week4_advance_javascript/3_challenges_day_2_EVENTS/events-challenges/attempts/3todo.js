//Using todo.html. When you click the button, the text inside the input should appear as the first item in a list. It should have a class of list-group-item.
(d => {
let button = d.getElementById("add");
let list = d.getElementById('list');
let input = d.getElementById('todo')

	button.addEventListener("click", () => {
		let li = d.createElement("li");
				
		li.textContent = input.value;

		list.appendChild(li);
	});

})(document);


// (d => {

// let button = d.getElementById("button");
// let main = d.getElementById('main');

// 	button.addEventListener("click", () => {
// 		let p = d.createElement("p");
// 		let span = d.createElement("span");
// 		p.textContent = "Clicked";
// 		span.textContent = "!";

// 		p.appendChild(span)
// 		console.log(main.appendChild(p));
// 	});

// })(document);

