const playBoard = document.querySelector(".play-board");

let foodX, foodY;

let SnakeX = 5, SnakeY = 10;
let velocityX = 0, velocityY = 0;

const changeFoodPosition =() => {
	foodX = Math.floor(Math.random() * 30) + 1;
	foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) =>{
	if(e.key === "KeyW" || e.key === "ArrowUp"){
		velocityX = 0;
		velocityY = -1;
	}else if(e.key === "KeyS" || e.key === "ArrowDown"){
		velocityX = 0;
		velocityY = 1;
	}else if(e.key === "KeyA" || e.key === "ArrowLeft"){
		velocityX = -1;
		velocityY = 0;
	}else if(e.key === "KeyD" || e.key === "ArrowRight"){
		velocityX = 1;
		velocityY = 0;
	}
	initGame();
}
const initGame = () =>{
	let html = '<div class = "food" style = "grid-area: ${foodY} / ${foodX} "></div>';
	
	html += '<div class = "head" style = "grid-area: ${SnakeY} / ${SnakeX} "></div>';
	
	playBoard.innerHTML = html;
}


changeFoodPosition();
initGame();

document.addEventListener("keydown", changeDirection);