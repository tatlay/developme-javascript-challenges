(d => {

let button = d.getElementById("button");
let counter = d.getElementById('counter');
let increment = 0;

	button.addEventListener("click", () => {
		increment += 1;
		counter.textContent = increment;

	});

})(document);

