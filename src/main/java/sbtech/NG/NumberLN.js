const cardContainer = document.querySelector(".cards");
const cards = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
const cardpicker = [...cards];
const cardcount = cardpicker.length;


function newCard(card){
	
	const newCard = document.createElement("div");
	
	newCard.classList.add("card");
	
	newCard.setAttribute("id", card);
	
	newCard.innerText = card;
	
	newCard.addEventListener("click", () => {
		let numberaudio = new Audio("../wicket/resource/sbtech.NG.NumberLN/audioRec/" + card + ".m4a");
		numberaudio.play();
	});
	
	return newCard;
}

for (c = 0; c < cardcount; c++){
	
	const randomIndex = Math.floor(Math.random() * cardpicker.length);
	const card = cardpicker[randomIndex];
	const tile = newCard(card);
	
	
	
	cardpicker.splice(randomIndex, 1);
	cardContainer.appendChild(tile);
}