const tileContainer = document.querySelector('.tiles');
const colors = ["Red","Orange","Yellow","Green","Blue","Purple","White","Black","Brown","Gray"];
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
