var rows = 10;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

var imgOrder = ["img-0","img-1", "img-2", "img-3", "img-4", "img-5","img-6", "img-7", "img-8", "img-9",
				 "img-10","img-11","img-12","img-13","img-14","img-15","img-16","img-17","img-18","img-19",
				 "img-20","img-21","img-22","img-23","img-24","img-25","img-26","img-27","img-28","img-29",
				 "img-30","img-31","img-32", "img-33","img-34","img-35","img-36","img-37","img-38","img-39",
				 "img-40","img-41","img-42","img-43","img-44","img-45","img-46","img-47","img-48","img-49"];

shuffle(imgOrder);


window.onload = function(){
	for (let r = 0; r < rows; r++){
		for (let c = 0; c < columns; c++){
			
			let tile = document.createElement("img");
			
			tile.id = r.toString() + "-" + c.toString();
			
			tile.src = "../wicket/resource/sbtech.NG.PuzEx/puzzimg/" + imgOrder.shift() + ".jpg";
			
			
			tile.addEventListener("dragstart", dragStart);
			tile.addEventListener("dragover", dragOver);
			tile.addEventListener("dragenter", dragEnter);
			tile.addEventListener("dragleave", dragLeave);
			tile.addEventListener("drop", dragDrop);
			tile.addEventListener("dragend", dragEnd);
			
			document.getElementById('puzzleBoard').append(tile);
			
		
		}
	}
}

function dragStart(){
		currTile = this;
		}

function dragOver(e){
		e.preventDefault();
		}
	
function dragEnter(e){
		e.preventDefault();
		}
function dragLeave(e){
	
	
		}
function dragDrop(){
		otherTile = this;
		}
	
function dragEnd() {
	/*	
		let currCoords = currTile.id.split("-");
		
		let r = parseInt(currCoords[0]);
		let c = parseInt(currCoords[1]);
		
		let otherCoords = otherTile.id.split("-");
		
		let r2 = parseInt(otherCoords[0]);
		let c2 = parseInt(otherCoords[1]);
		
		let moveLeft = r == r2 && c2 == c-1;	
		let moveRight = r == r2 && c2 == (c+1);
		
		let moveUp = c == c2 && r2 == r-1;
		let moveDown = c == c2 && r2 == (r+1);
		
		
		let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
		
	
		if(isAdjacent){	
*/
			let currImg = currTile.src;
			let otherImg = otherTile.src;
				
			currTile.src = otherImg;
			otherTile.src = currImg;

			turns += 1;
			document.getElementById("turns").innerText = turns;
		}
					
function shuffle(array){
		let currentIndex = array.length;
		
		while(currentIndex != 0){
			
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			
			
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	}