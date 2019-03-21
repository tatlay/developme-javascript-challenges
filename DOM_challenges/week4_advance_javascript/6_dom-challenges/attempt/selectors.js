((d) => {
 	let container = d.body; // 
	container.classList.add("container");
    

	let header = d.getElementById("header");
	header.classList.add("col-md-12");
    

	let sidebar = d.getElementById("sidebar"); 
	sidebar.classList.add("col-md-4");
    

	let main = d.getElementById("main");
	main.classList.add("col-md-8");
    	
	let mainFirstP = d.querySelector("main p:first-child"); //don't need first child because of how query selector workds.  
	mainFirstP.classList.add("lead");

	let listGroup = Array.from(d.getElementsByClassName("js__first-list"))[0]; 
	let items = Array.from(listGroup.children);
	items.forEach(el => el.classList.add("list-group-item"));
    
	// let pagination = d.querySelector("js__second-list");
	// pagination.classList.add("pagination");


})(document); // and call it immediately
