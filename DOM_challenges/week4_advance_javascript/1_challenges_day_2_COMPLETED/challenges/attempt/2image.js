(d => {

let image = d.getElementById("image");
	console.log(image.style.width);
let size = image.clientWidth; //gets size of image and stores into size
	image.style.width = `${size * 2}px`; //adds the value of itself
	// console.log(size);
})(document);