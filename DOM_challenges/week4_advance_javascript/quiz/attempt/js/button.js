((d) => {
    let top = 0;
    let button = d.getElementById("button")

	button.addEventListener("click", () => {
		top += 50;
		button.style.top = top + "px";
	});

})(document);

/*
Procedure
get information from the dom
set count to zero
event listener (click) function
	add 50 px to the count
	change style element of top 
*/