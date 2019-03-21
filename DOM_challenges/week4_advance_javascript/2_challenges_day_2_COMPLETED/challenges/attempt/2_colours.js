//Using the colours.html file. With JavaScript, add a list of all the different colours used by the <div>s.
(d => {
const colour = d.getElementById('items');
const children = [...colour.children];
const inputColour = d.getElementById('colours');
let fragment = d.createDocumentFragment();

children.forEach(function(colour) {
	let li = d.createElement("li");	
		li.textContent = colour.style.backgroundColor;
		fragment.appendChild(li);	 
});
	inputColour.appendChild(fragment);
})(document);
