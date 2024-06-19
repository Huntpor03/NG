const wordText = document.querySelector(".word");

const inputText = document.querySelector(".spell");

const scoreArea = document.querySelector(".score");

const checkBtn = document.getElementById("checkword");

const genBtn = document.getElementById("generate");

let correctWord;

let score = 0;


let words = [
	
	{
		word: "APPLE"
	},
	
	{
		word: "BATTLE"
	},
	{
		word: "BING"
	},
	{
		word: "BOTTLE"
	},
	{
		word: "BETS"
	},
	{
		word: "BUNS"
	},
	{
		word: "CAT"
	},
	{
		word: "CORN"	
	},
	{
		word: "DRAG"
	},
	{
		word: "DIG"
	},
	{
		word: "EATEN"
	},
	{
		word: "EGG"
	},
	{
		word: "FROGS"
	},
	{
		word: "GOTTEN"
	},
	{
		word: "GIT"
	},
	{
		word: "HIDDEN"
	},
	{
		word: "ILLNESS"
	},
	{
		word: "JET"
	},
	{
		word: "KNOT"
	},
	{
		word: "LOGGED"
	},
	{
		word: "MAN"
	},
	{
		word: "NOT"
	},
	{
		word: "OPEN"
	},
	{
		word: "PAN"	
	}, 
	{
		word: "QUIT"
	}, 
	{
		word: "RAN"
	},
	{
		word: "SIN"
	},
	{
		word: "TEA"
	}, 
	{
		word: "UPON"
	}, 
	{
		word: "VET"
	},
	{
		word: "WET"
	},
	{
		word: "XRAY"
	},
	{
		word: "YOU"
	},
	{
		word: "ZOO"
	}
	
];

const game = () => {
	let randomObj = words[Math.floor(Math.random() * words.length)];
	let wordArray = randomObj.word.split("");
	
	for (let i = wordArray.length - 1; i > 0; i --){
		let j = Math.floor(Math.random() * (i + 1));
		[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
	}
	
	
	wordText.innerText = wordArray.join("");
	correctWord = randomObj.word.toLowerCase();;
	inputText.value = "";
	
	inputText.setAttribute("maxlength", correctWord.length);
	scoreArea.innerText = score;
	
	if(score > 14){
		winner();
	}
	
}

const checkWord = () => {
	
	let userWord = inputText.value.toLowerCase();
	
	
	if(userWord !== correctWord) {
		if(score >= 1) {
			score = score - 1;
			scoreArea.innerHTML = score;
		}
	}
	else 
	{
	score++;
	}
	game();
}

const winner = () => {
	alert("WOW! You won!");
	location.reload();
}


genBtn.addEventListener('click', game);
checkBtn.addEventListener('click', checkWord);


game();