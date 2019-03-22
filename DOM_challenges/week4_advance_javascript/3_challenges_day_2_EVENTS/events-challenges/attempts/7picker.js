//Add JavaScript to colour-picker.html so that it works.
(d => {
let picker = d.getElementById("picker");

let red = d.getElementById("red");
let green = d.getElementById("green");
let blue = d.getElementById("blue");

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

red.addEventListener("input", () => {
	redValue = red.value
	colourPicker();
});

green.addEventListener("input", () => {
	greenValue = green.value
	colourPicker();
});

blue.addEventListener("input", () => {
	blueValue = blue.value
	colourPicker();
});

let colourPicker = () => {
	picker.style.backgroundColor = "rgb("+redValue+","+greenValue+","+blueValue+")";
}

})(document);