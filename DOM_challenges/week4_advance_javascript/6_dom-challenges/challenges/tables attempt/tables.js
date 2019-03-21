((d) => {
	let alternate = Array.from(d.getElementsByClassName("table")); 

		let evenrow = alternate % 2;

		if (evenrow === true){

			alternate.forEach(el => el.classList.add("alternate"));
		
		};
	

})(document);

//first element child
//.filter
//target the tbody
//i % 2 !== % 0 - this is a function not a conditional.
//get by tag name tr

//let table, let table rows, 