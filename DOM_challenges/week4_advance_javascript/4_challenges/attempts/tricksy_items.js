// In items.html, use JavaScript to add a class of col-x where x is the column that the item should appear in if it's in a four by four grid and add a class of row-y, where y represents the current row the item should appear on.

// e.g. the first item would have the class col-1 row-1, the second col-2 row-1, the fifth col-1 row-2

// Hint: You'll need to round some numbers, you can use Math.ceil() or Math.floor() to do this:
(d => {

let items = d.getElementById("items");

let divArr = Array.from(items.children)

//divArr.forEach(values => {

//work in progress
//use modulas
	divArr[0].classList.add("row-1", "col-1");		
	divArr[1].classList.add("row-1", "col-2");		
	divArr[2].classList.add("row-1", "col-3");		
	divArr[3].classList.add("row-1", "col-4");

	divArr[4].classList.add("row-2", "col-1");		
	divArr[5].classList.add("row-2", "col-2");		
	divArr[6].classList.add("row-2", "col-3");		
	divArr[7].classList.add("row-2", "col-4");		
	
	divArr[8].classList.add("row-3", "col-1");		
	divArr[9].classList.add("row-3", "col-2");		
	divArr[10].classList.add("row-3", "col-3");		
	divArr[11].classList.add("row-3", "col-4");		
	
	divArr[12].classList.add("row-4", "col-1");		
	divArr[13].classList.add("row-4", "col-2");		
	divArr[14].classList.add("row-4", "col-3");		
	divArr[15].classList.add("row-4", "col-4");		
	
//})

})(document);



//add two classes to each div
//array of 16 divs
//foreach 

// arr1.forEach(values => {
// 		let li = d.createElement("li");
// 		li.classList.add("list-group-item");		
// 		li.textContent = values;
// 		list.appendChild(li);
// 		arr1 = [];
// 	});