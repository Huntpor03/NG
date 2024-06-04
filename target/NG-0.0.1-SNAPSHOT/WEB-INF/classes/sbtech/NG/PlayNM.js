const numbertilescontainer = document.querySelector('.numbertiles');
const numbers = ["0","1","2","3","4","5"];
const numberpicker = [...numbers, ...numbers];
const tileCount = numberpicker.length;



//Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndofMove = false;

function buildTile(number){
	
	const element = document.createElement("div");
	
	element.classList.add("numbertile");
	element.setAttribute("data-number",number);
	
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
		
		if(awaitingEndofMove){
			
			return;
		}
		
		element.innerText = number;
		
		if(!activeTile){
			activeTile = element;
			
			return;
		}
		
		const numberToMatch = activeTile.getAttribute("data-number");
		
		if(numberToMatch === number){
			
			activeTile.setAttribute("data-revealed", true);
			element.setAttribute("data-revealed", true);
			activeTile = null;
			awaitingEndofMove = false;
			revealedCount += 2;
			
			if(revealedCount === tileCount){
				alert("Congraulations! You have Won the game!")
				
			}
			
			return;
		}
		awaitingEndofMove = true;
		
		setTimeout(() =>{
			element.innerText = null;
			activeTile.innerText = null;
			
			awaitingEndofMove = false;
			activeTile = null;
		}, 500);
	});
	
	return element;
}
	
//Number Tile Builder
for (let i = 0; i < tileCount; i++){
	
	const randomIndex = Math.floor(Math.random() * numberpicker.length);
	const number = numberpicker[randomIndex];
	const tile = buildTile(number);
	
	
	
	numberpicker.splice(randomIndex, 1);
	numbertilescontainer.appendChild(tile);
}	