const tilesContainer = document.querySelector('.tiles');
const colors = ["red","orange","yellow","green","blue","purple"];
const colorpicker = [...colors, ...colors];
const tileCount = colorpicker.length;

//Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndofMove = false;

score = 0;

function buildTile(color){
	const element = document.createElement("div");
	
	element.classList.add("tile");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");
	
	element.addEventListener("click", () =>{
		const revealed = element.getAttribute("data-revealed");
		if(awaitingEndofMove || revealed === true || element === activeTile) {
			
			return;
		}
		
		element.style.backgroundColor = color;
		
		if(!activeTile){
			activeTile = element;
			
			return;
		}
		
		const colorToMatch = activeTile.getAttribute("data-color");
		
		if(colorToMatch === color){
			
			activeTile.setAttribute("data-revealed", true);
			element.setAttribute("data-revealed", true);
			activeTile = null;
			awaitingEndofMove = false;
			revealedCount += 2;
		
			if(revealedCount === tileCount){
				alert("Yay! You did it!");
			}

			return;
		}
		awaitingEndofMove = true;
		
		setTimeout(() =>{
			element.style.backgroundColor = null;
			activeTile.style.backgroundColor = null;
			
			awaitingEndofMove = false;
			activeTile = null;
		}, 500);
	});

	return element;
}

// Build up Tiles

for (let i = 0; i < tileCount; i++){
	
	const randomIndex = Math.floor(Math.random() * colorpicker.length);
	const color = colorpicker[randomIndex];
	const tile = buildTile(color);
	
	colorpicker.splice(randomIndex, 1);
	tilesContainer.appendChild(tile);
	
}


