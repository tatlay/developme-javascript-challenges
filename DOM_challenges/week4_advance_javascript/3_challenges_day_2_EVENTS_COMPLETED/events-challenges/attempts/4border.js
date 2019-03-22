//Using your border.js file from yesterday, update the JavaScript so that when the user clicks on the <div>, its border colour should alternate between red and black.

(d => {

let border = d.getElementById("border");
let borderStatus = 0;

	border.addEventListener("click", () => { 
		borderStatus +=1;

		if (borderStatus %2 !== 1){		
			border.style.border = "10px solid Red";
		}
		else{
			border.style.border = "10px solid black";
		}
	});

})(document);
