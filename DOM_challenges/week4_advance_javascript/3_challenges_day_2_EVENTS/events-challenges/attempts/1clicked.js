(d => {

let button = d.getElementById("button");
let main = d.getElementById('main');

	button.addEventListener("click", () => {
		let p = d.createElement("p");
		let span = d.createElement("span");
		p.textContent = "Clicked";
		span.textContent = "!";

		p.appendChild(span)
		console.log(main.appendChild(p));
	});

})(document);

