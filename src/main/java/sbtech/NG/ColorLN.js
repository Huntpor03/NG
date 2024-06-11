//CONTAINERS
const tileContainer = document.querySelector('.tiles');
const itemContainer = document.querySelector(".fitems");


// COLOR ARRAY
const colors = ["Red","Orange","Yellow","Green","Blue","Purple","White","Black","Brown","Pink"];


//EMPTY IMAGES
const reditems = ["emptyapple","emptyheart","emptycrayon","emptystrawberry","emptyraspberry"];
const orangeitems = ["emptycarrot","emptypumpkin","emptyorange","emptybasketball","emptyfire"];

const yellowitems = ["bananna","sunflower","sponge","corn","duck"];
const greenitems = ["frog","clover","grass","pear","trees"];
const blueitems = ["blueberry","whale","jeans","balloon","car"];
const purpleitems = ["grapes","paint","jellyfish","crystal","shoes"];

//FILLED IMAGES
const reditemsfilled = ["apple","heart","crayon","strawberry","raspberry"];
const orangeitemsfilled = ["carrot","pumpkin","orange","basketball","fire"];
const yellowitemsfilled = [""];

// COLOR / IMAGE PICKERS
const colorpick = [...colors];
const redpicker = [...reditems];
const orangepicker = [...orangeitems];
const yellowpicker = [...yellowitems];
const greenpicker = [...greenitems];
const bluepicker = [...blueitems];
const purplepicker = [...purpleitems];

// FILLED IMAGE PICKERS
const redfilleditem = [...reditemsfilled];
const orangefilleditem = [...orangeitemsfilled];
const yellowfilleditem = [...yellowitemsfilled];

//COUNTERS
const tileCount = colorpick.length;
const redcount = redpicker.length;
const orangecount = orangepicker.length;
const yellowcount = yellowpicker.length;



const clicked = document.getElementById("clicked");


function BuildTile(color){
	const newTile = document.createElement("div");
	
	newTile.classList.add("tile");
	
	newTile.setAttribute("data-color", color);
	newTile.setAttribute('id', color);
	
	newTile.style.background = color;
	
	newTile.addEventListener("click", () => {
		
		newTile.style.backgroundColor = color;
		
		let audio = new Audio( "../wicket/resource/sbtech.NG.ColorLN/audioRec/" + color + ".m4a");
		audio.play();
		clicked.innerText = color;
		
		
		if(clicked.innerText == "Red"){
			function reditem(){
	
				const reditem = document.createElement("img");
	
					reditem.classList.add("item");
	
					reditem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + redpicker.shift() + ".jpg";
	
					reditem.addEventListener("click", () => {
		
						reditem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + redfilleditem.shift() + ".jpg";
	
				});
	
					return reditem;
			}
	


			for (let r = 0; r < redcount; r++){
	
				const colored = redpicker[reditems.length];
				const itemTile = reditem(colored);
				itemContainer.appendChild(itemTile);
			}
		
		 }
		 
		 if (clicked.innerText == "Orange"){
			function orangeitem(){
				const orangeitem = document.createElement("img");
				
				orangeitem.classList.add("item");
				
				orangeitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + orangepicker.shift() + ".jpg";
				
				orangeitem.addEventListener("click", () => {
		
						orangeitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + orangefilleditem.shift() + ".jpg";
	
				});	
				
				return orangeitem;
		 	}
		 	
		 	for(let o = 0; o < orangecount; o++){
				const orangecolored = orangepicker[orangeitems.length];
				const itemTile = orangeitem(orangecolored);
				
				itemContainer.appendChild(itemTile);
				
			}
		 	
		 }
		 
		 if(clicked.innerText == "Yellow"){
			function yellowitem(){
				const yellowitem = document.createElement("img");
				
				yellowitem.classList.add("item");
				
				yellowitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + yellowpicker.shift() + ".jpg";
				
				yellowitem.addEventListener("click", () => {
					
					yellowitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + yellowfilleditem.shift() + ".jpg";
				});
				
				return yellowitem;
			}
		 }
		 for(let y = 0; y < yellowcount; y++){
			const yellowcolored = yellowpicker[yellowitems.length];
			const yellowTile = yellowitem(yellowcolored);
			itemContainer.appendChild(yellowTile);
		 }
		 
	});
	
	return newTile;
}

for (let i = 0; i < tileCount; i++){
	
	const randomIndex = Math.floor(Math.random() * colorpick.length);
	const color = colorpick[randomIndex];
	const tile = BuildTile(color);
	
	colorpick.splice(randomIndex, 1);
	tileContainer.appendChild(tile);
}