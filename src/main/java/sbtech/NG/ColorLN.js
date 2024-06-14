//CONTAINERS
const tileContainer = document.querySelector('.tiles');
const itemContainer = document.querySelector(".fitems");


// COLOR ARRAY
const colors = ["Red","Orange","Yellow","Green","Blue","Purple","White","Black","Brown","Pink"];


//EMPTY IMAGES
const reditems = ["emptyapple","emptyheart","emptycrayon","emptystrawberry","emptyraspberry"];
const orangeitems = ["emptycarrot","emptypumpkin","emptyorange","emptybasketball","emptyfire"];
const yellowitems = ["emptybanana","emptysun","emptylemon","corn","duck"];
const greenitems = ["frog","clover","grass","pear","trees"];
const blueitems = ["blueberry","whale","jeans","balloon","car"];
const purpleitems = ["grapes","paint","jellyfish","crystal","shoes"];
const brownitems = [""];
const pinkitems = [""];
const whiteitems = [""];
const blackitems = [""];

//FILLED IMAGES
const reditemsfilled = ["apple","heart","crayon","strawberry","raspberry"];
const orangeitemsfilled = ["carrot","pumpkin","orange","basketball","fire"];
const yellowitemsfilled = ["banana","sun","lemon"];
const greenitemsfilled = [""];
const blueitemsfilled = [""];
const purpleitemsfilled = [""];
const brownitemsfilled = [""];
const pinkitemsfilled = [""];
const whiteitemsfilled = [""];
const blackitemsfilled = [""];

// COLOR / IMAGE PICKERS
const colorpick = [...colors];
const redpicker = [...reditems];
const orangepicker = [...orangeitems];
const yellowpicker = [...yellowitems];
const greenpicker = [...greenitems];
const bluepicker = [...blueitems];
const purplepicker = [...purpleitems];
const brownpicker = [...brownitems];
const pinkpicker = [...pinkitems];
const whitepicker = [...whiteitems];
const blackpicker = [...blackitems];

// FILLED IMAGE PICKERS
const redfilleditem = [...reditemsfilled];
const orangefilleditem = [...orangeitemsfilled];
const yellowfilleditem = [...yellowitemsfilled];
const greenfilleditem = [...greenitemsfilled];
const bluefilleditem = [...blueitemsfilled];
const purplefilleditem = [...purpleitemsfilled];
const brownfilleditem = [...brownitemsfilled];
const pinkfilleditem = [...pinkitemsfilled];
const whitefilleditem = [...whiteitemsfilled];
const blackfilleditem = [...blackitemsfilled];


//COUNTERS
const tileCount = colorpick.length;
const redcount = redpicker.length;
const orangecount = orangepicker.length;
const yellowcount = yellowpicker.length;
const greencount = greenpicker.length;
const bluecount = bluepicker.length;
const purplecount = purplepicker.length;
const browncount = brownpicker.length;
const pinkcount = pinkpicker.length;
const whitecount = whitepicker.length;
const blackcount = blackpicker.length;


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
				const RedTile = reditem(colored);
				itemContainer.appendChild(RedTile);
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
				const OrangeTile = orangeitem(orangecolored);
				
				itemContainer.appendChild(OrangeTile);
				
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
			for(let y = 0; y < yellowcount; y++){
				const yellowcolored = yellowpicker[yellowitems.length];
				const yellowTile = yellowitem(yellowcolored);
				itemContainer.appendChild(yellowTile);
		 	}
		 }
		 
		 if(clicked.innerText == "Green"){
			function greenitem(){
				const greenitem = document.createElement("img");
				
				greenitem.classList.add("item");
				
				greenitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + greenpicker.shift() + ".jpg";
				
				greenitem.addEventListener("click", () => {
				
					greenitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + greenfilleditem.shift() + ".jpg";	
				});
				return greenitem;
			}
			
			for(let g = 0; g < greencount; g++){
				const greencolored = greenpicker[greenitems.legth];
				const greenTile = greenitem(greencolored);
				itemContainer.appendChild(greenTile);
		 	}
		 }
		 
		 if(clicked.innerText == "Blue"){
			function blueitem(){
				const blueitem = document.createElement("img");
				
				blueitem.classList.add("item");
				
				blueitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + bluepicker.shift() + ".jpg";
				
				blueitem.addEventListener("click", () => {
					 
					 blueitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + bluefilleditem.shift() + ".jpg";
				});
				return blueitem;
			}
			
			for(b = 0; b < bluecount; b++){
				const bluecolored = bluepicker[blueitems.length];
				const blueTile = blueitem(bluecolored);
				itemContainer.appendChild(blueTile);
			}
			
		 }
		 
		 if(clicked.innerText == "Purple"){
			function purpleitem(){
				const purpleitem = document.createElement("img");
				
				purpleitem.classList.add("item");
				
				purpleitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + purplepicker.shift() + ".jpg";
				
				purpleitem.addEventListener("click", () =>{
					
					purpleitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + purplefilleditem.shift() + ".jpg";
				});
				return purpleitem;
			}
			for(p = 0; p < purplecount; p++){
				const purplecolored = purplepicker[purpleitems.length];
				const purpleTile = purpleitem(purplecolored);
				itemContainer.appendChild(purpleTile);
			}
		 }
		 
		 if(clicked.innerText == "Brown"){
			function brownitem(){
				const brownitem = document.createElement("img");
				
				brownitem.classList.add("item");
				
				brownitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + brownpicker.shift() + ".jpg";
				
				brownitem.addEventListener("click", () => {
					
					brownitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + brownfilleditem.shift() + ".jpg";
				});
				return brownitem;
			}
			for(br = 0; br < browncount; br++){
				const browncolored = brownpicker[brownitems.length];
				const brownTile = brownitem(browncolored);
				itemContainer.appendChild(brownTile);
			}
		 }
		 
		 if(clicked.innerText == "Pink"){
			function pinkitem(){
				const pinkitem = document.createElement("img");
				
				pinkitem.classList.add("item");
				
				pinkitem.src = 	"../wicket/resource/sbtech.NG.ColorLN/colorimg/" + pinkpicker.shift() + ".jpg";
				
				pinkitem.addEventListener("click", () => {
					
					pinkitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + pinkfilleditem.shift() + ".jpg";
				});
				return pinkitem;
			}
			for(pi = 0; pi < pinkcount; pi++){
				const pinkcolored = pinkpicker[pinkitems.length];
				const pinkTile = pinkitem(pinkcolored);
				itemContainer.appendChild(pinkTile);
			}
		 }
		 
		 if(clicked.innerText == "White"){
			function whiteitem(){
				const whiteitem = document.createElement("img");
				
				whiteitem.classList.add("item");
				
				whiteitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + whitepicker.shift() + ".jpg";
				
				whiteitem.addEventListener("click", () => {
					
					whiteitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + whitefilleditem.shift() + ".jpg";
				});
				return whiteitem;
			}
			for(w = 0; w < whitecount; w++){
				const whitecolored = whitepicker[whiteitems.length];
				const whiteTile = whiteitem(whitecolored);
				itemContainer.appendChild(whiteTile);
			}
		 }
		 
		 if(clicked.innerText == "Black"){
			function blackitem(){
				const blackitem = document.createElement("img");
				
				blackitem.classList.add("item");
				
				blackitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + blackpicker.shift() + ".jpg";
				
				blackitem.addEventListener("click", () => {
					
					blackitem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + blackfilleditem.shift() + ".jpg";
				});
				return blackitem;
			}
			
			for(bla = 0; bla < blackcount; bla++){
				const blackcolored = blackpicker[blackitems.length];
				const blackTile = blackitem(blackcolored);
				itemContainer.appendChild(blackTile);
				}
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