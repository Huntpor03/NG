const tileContainer = document.querySelector('.tiles');
const colors = ["Red","Orange","Yellow","Green","Blue","Purple","White","Black","Brown","Pink"];
const colorpick = [...colors];
const tileCount = colorpick.length;

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

const itemContainer = document.querySelector(".fitems");

const reditems = ["apple","emptyheart","crayon","emptystrawberry","rasbarry"];
const reditemsfilled = ["heart","strawberry"];
const orangeitems = ["carrot","pumpkin","orange","basketball","fire"];
const yellowitems = ["bananna","sunflower","sponge","corn","duck"];
const greenitems = ["frog","clover","grass","pear","trees"];
const blueitems = ["blueberry","whale","jeans","balloon","car"];
const purpleitems = ["grapes","paint","jellyfish","crystal","shoes"];

const itempicker = [...reditems,...blueitems,...orangeitems,...yellowitems,...greenitems,...purpleitems];
const itemCount = itempicker.length;

const filleditem = [...reditemsfilled];

function BuildItem(){
	
	const newItem = document.createElement("img");
	
	newItem.classList.add("item");
	
	newItem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + itempicker.shift() + ".jpg";
	
	newItem.addEventListener("click", () => {
		
			newItem.src = "../wicket/resource/sbtech.NG.ColorLN/colorimg/" + filleditem.shift() + ".jpg";
	
	});
	
	return newItem;
}



for (let j = 0; j < itemCount; j++){
	
	const randomitems = Math.floor(Math.random() * itempicker.length);
	const colored = itempicker[randomitems];
	const itemTile = BuildItem(colored);
	
	itempicker.splice(randomitems, 1);
	itemContainer.appendChild(itemTile);
}
