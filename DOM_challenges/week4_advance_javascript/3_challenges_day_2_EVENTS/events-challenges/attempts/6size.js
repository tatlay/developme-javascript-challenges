//Update your size.js file from last week so that it updates the window dimensions on resizing the window.
(d => {
let widthID = d.getElementById("width");
let heightID = d.getElementById("height");

let resize = () =>{
	let heightSize = window.innerHeight;
	let widthSize = window.innerWidth;
	widthID.textContent = widthSize; 
	heightID.textContent = heightSize; 
}

window.addEventListener("resize", resize);
resize();

})(document);