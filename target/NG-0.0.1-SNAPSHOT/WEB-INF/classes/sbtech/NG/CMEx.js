const tilesContainer = document.querySelector('.tilesEx');
const colors = ["#f4f4f4","#f0f0f0","#ececec","#e8e8e8","#e4e4e4","#e0e0e0","#ffeaea","#fee2e2","#fedada","#fed2d2","#fecac9","#fec2c1","#fff4ea","#fef0e2","#feecda","#fee8d2","#fee4c9","#fee0c1","#ffffea","#fefee2","#fefeda","#fefed2","#fefec9","#fefec1","#f5fbee",
"#f1f9e7","#edf8e1","#e9f6da","#e5f5d3", "#e1f3cd","#eef9fa","#e8f7f9","#e1f5f7","#dbf3f5","#d4f0f4","#ceeef2","#f3eaff","#eee2fe","#eadafe","#e5d2fe","#e0c9fe","#dcc1fe"];
const colorpicker = [...colors, ...colors];
const tileCount = colorpicker.length;
const time = timer();

//Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndofMove = false;


function buildTile(color){
	const element = document.createElement("div");
	
	element.classList.add("tileEx");
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
		
		const bodycolor = document.getElementsByName('body');
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
	const tileEx = buildTile(color);
	
	colorpicker.splice(randomIndex, 1);
	tilesContainer.appendChild(tileEx);
	
}

function timer() {
	var sec = 0;
	var timer = setInterval(function () {
		document.getElementById('time').innerHTML= "Time:" + sec;
		sec++
		if (revealedCount === tileCount) {
			clearInterval(timer);
			alert ("WOW! I'm impressed you got that :) Your time to beet:" + sec); 

		}
	}, 1000);
}


