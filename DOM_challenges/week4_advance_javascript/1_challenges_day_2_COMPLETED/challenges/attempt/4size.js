(d => {
let widthID = d.getElementById("width");
let widthSize = window.innerWidth;

let heightID = d.getElementById("height");
let heightSize = window.innerHeight;

widthID.textContent = widthSize; 
heightID.textContent = heightSize; 

})(document);