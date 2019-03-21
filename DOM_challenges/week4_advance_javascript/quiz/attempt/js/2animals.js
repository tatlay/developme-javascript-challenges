((d) => {
	let list = d.getElementById("list");
	let animalClass = d.getElementsByClassName ("list-group-item");

	list.addEventListener("click", e => {
	let click = e.target;

		if (click.tagName === "LI") {
			list.insertBefore(click, list.firstElementChild)
		}

	});

})(document);

//refer to 6.3 inserting / moving elements
