(d => {

let rhubarb = d.getElementById('rhubarbs'); 
let fragment = d.createDocumentFragment();

for (let i = 0; i <=100; i++){
	let el = d.createElement("p");
	el.textContent = "Rhubarb";
	fragment.appendChild(el);
}

rhubarb.appendChild(fragment);

})(document);


// get element byid

// loop rhubarb 100 times
// output to text content
