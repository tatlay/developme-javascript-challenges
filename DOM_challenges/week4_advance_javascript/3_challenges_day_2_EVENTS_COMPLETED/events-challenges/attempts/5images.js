// Using your image.js file from yesterday, update the JavaScript so that every time you click the image it should double in size. Try adding a button to reset the size (feel free to edit the HTML to add the Reset button).
(d => {

let image = d.getElementById("image");
let defaultWidth = 500;

	image.addEventListener("click", () => { 
		let size = image.clientWidth; //gets size of image and stores into size
		image.style.width = `${size * 2}px`; //adds the value of itself
	});


let reset = d.getElementById("reset");
	reset.addEventListener("click", () => { 
		image.style.width = `${defaultWidth}px`;
	});

})(document);



