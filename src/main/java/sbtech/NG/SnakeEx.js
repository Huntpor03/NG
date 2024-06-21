const gameboard = document.querySelector("#gameBoard");
const ctx = gameboard.getContext("2d");
const scoreText = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameboard.width;
const gameHeight = gameboard.height;
const boardBackground = "black";
const snakeColor = "yellow";
const snakeBoarder = "black";
const foodColor = "lightblue";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
	
	{x:unitSize * 2, y:0},
	{x:unitSize, y:0},
	{x:0,y:0}
]

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);


gameStart();

function gameStart() {
	running = true;
	scoreText.textContent = 0;
	createFood();
	drawFood();
	nextTick();
};

function nextTick(){
	if(running){
		setTimeout(() =>{
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
		}, 100);
	}
	else{
		displayGameOver();
	}
}

function clearBoard(){
	ctx.fillStyle = boardBackground;
	ctx.fillRect(0,0, gameWidth, gameHeight);
}

function createFood(){
	function randomFood(min, max){
		const randNum = Math.round((Math.random() * (max-min) + min) / unitSize) * unitSize;
		return randNum;
	}
	foodX = randomFood(0, gameWidth - unitSize);
	foodY = randomFood(0, gameWidth - unitSize);
	console.log();
}
function drawFood(){
	ctx.fillStyle = foodColor;
	ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake () {
	const head = {x: snake[0].x + xVelocity,
				  y: snake[0].y + yVelocity};
				  
	snake.unshift(head);
	if(snake[0].x == foodX && snake[0].y == foodY){
		score += 1;
		scoreText.textContent = score;
		createFood();
	}else{
		snake.pop();
	}
}
function drawSnake() {
	ctx.fillStyle = snakeColor;
	ctx.strokeStyle = snakeBoarder;
	snake.forEach(snakePart => {
		ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
		ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
	})
}
function changeDirection(event){
	
	const KeyPressed = event.keyCode;

	const LEFT = 65;
	const DOWN = 83;
	const UP = 87;
	const RIGHT = 68;
	
	const goingUp = (yVelocity == -unitSize);
	const goingDown = (yVelocity == unitSize);
	const goingRight = (xVelocity == unitSize);
	const goingLeft = (xVelocity == -unitSize);
	
	switch(true){
		case(KeyPressed == LEFT && !goingRight):
			xVelocity = -unitSize;
			yVelocity = 0;
			break;
		case(KeyPressed == UP && !goingDown):
			xVelocity = 0;
			yVelocity = -unitSize;
			break;
		case(KeyPressed == RIGHT && !goingLeft):
			xVelocity = unitSize;
			yVelocity = 0;
			break;
		case(KeyPressed == DOWN && !goingUp):
			xVelocity = 0;
			yVelocity = unitSize;
			break;
	}
	
}
function checkGameOver() {
	switch(true){
		case (snake[0].x < 0):
			running = false;
			break;
		case (snake[0].x >= gameWidth):
			running = false;
			break;
		case (snake[0].y < 0):
			running = false;
			break;
		case (snake[0].y >= gameHeight):
			running = false;
			break;
	}
	for(let i = 1; i < snake.length; i+=1){
		if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
			running = false;
		}
	}
};
function displayGameOver(){
	ctx.font = "40px MV Boli";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
	running = false;
}
function resetGame() {
	score = 0;
	xVelocity = unitSize;
	yVelocity = 0;
	snake = [
		{x:unitSize * 2, y:0},
		{x:unitSize, y:0},
		{x:0,y:0}
	];
	gameStart();
};