const alphabetContainer = document.querySelector(".alphabet");
const choiceContainer = document.querySelector(".choiceletter");
const backContainer = document.querySelector(".backspace");

const fill = document.querySelectorAll('.fill');
//const empties = document.querySelectorAll('.empty');
const alphabet = ["Aa","Bb","Cc", "Dd","Ee","Ff","Gg","Hh", "Ii","Jj","Kk","Ll","Mm","Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"];
const aimg = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'Backspace','Enter'];

const alphabetpicker = [...alphabet];

const letterpicker = [...aimg];
const alphabetCount = alphabetpicker.length;

const letterTitle = document.getElementById("lettered");
const spell = document.getElementById("spell");
const typeempty = document.getElementById('empty');

const img = document.createElement('img');

let draggedItem = null;

aimg.forEach(function createImage(image){
				const img = document.createElement('img');
				
				img.src = "../wicket/resource/sbtech.NG.AlphaLN/alphaimg/" + image + ".jpg";
				img.classList.add('fill');
				img.setAttribute("draggable", true);
				img.id = image;
				choiceContainer.append(img);
				
				
				img.addEventListener("click", () => {
					
					if(img.id == "A"){
						typeempty.innerText += "A";
					}
					if(img.id == "B") {
						typeempty.innerText += "B";
					}
					if(img.id == "C") {
						typeempty.innerText += "C";
					}
					if(img.id == "D") {
						typeempty.innerText += "D";
					}
					if(img.id == "E") {
						typeempty.innerText += "E";
					}
					if(img.id == "F") {
						typeempty.innerText += "F";
					}
					if(img.id == "G") {
						typeempty.innerText += "G";
					}
					if(img.id == "H") {
						typeempty.innerText += "H";
					}
					if(img.id == "I") {
						typeempty.innerText += "I";
					}
					if(img.id == "J") {
						typeempty.innerText += "J";
					}
					if(img.id == "K") {
						typeempty.innerText += "K";
					}
					if(img.id == "L") {
						typeempty.innerText += "L";
					}
					if(img.id == "M") {
						typeempty.innerText += "M";
					}
					if(img.id == "N") {
						typeempty.innerText += "N";
					}
					if(img.id == "O") {
						typeempty.innerText += "O";
					}
					if(img.id == "P") {
						typeempty.innerText += "P";
					}
					if(img.id == "Q") {
						typeempty.innerText += "Q";
					}
					if(img.id == "R") {
						typeempty.innerText += "R";
					}
					if(img.id == "S") { 
						typeempty.innerText += "S";
					}
					if(img.id == "T") {
						typeempty.innerText += "T";
					}
					if(img.id == "U") {
						typeempty.innerText += "U";
					}
					if(img.id == "V") {
						typeempty.innerText += "V";
					}
					if(img.id == "W") {
						typeempty.innerText += "W";
					}
					if(img.id == "X") {
						typeempty.innerText += "X";
					}
					if(img.id == "Y") {
						typeempty.innerText += "Y";
					}
					if(img.id == "Z") {
						typeempty.innerText += "Z";
					}
					if(img.id == "Backspace") {
						typeempty.innerText = typeempty.innerText.slice(0,-1);
						
					}
					if(img.id == "Enter"){
						if(typeempty.innerText == letterTitle.innerText){
							alert("Nice Work! You are Learning!");
						} else if (typeempty.innerText !== letterTitle.innerText){
							alert("You're Learning, Please try again. ")
						}
					}
				});
			return image;
			});



document.addEventListener('keydown', function(event) {
	if(event.code == "KeyA"){
		typeempty.innerText += "A";
	}
	if(event.code == "KeyB"){
		typeempty.innerText += "B";
	}
	if(event.code == "KeyC"){
		typeempty.innerText += "C";
	}
	if(event.code == "KeyD") {
		typeempty.innerText += "D";
	}
	if(event.code == "KeyE") {
		typeempty.innerText += "E";
	}
	if(event.code == "KeyF") {
		typeempty.innerText += "F";
	}
	if(event.code == "KeyG") {
		typeempty.innerText += "G";
	}
	if(event.code == "KeyH") {
		typeempty.innerText += "H";
	}
	if(event.code == "KeyI") {
		typeempty.innerText += "I";
	}
	if(event.code  == "KeyJ") {
		typeempty.innerText += "J";
	}
	if(event.code == "KeyK") {
		typeempty.innerText += "K";
	}
	if(event.code == "KeyL") {
		typeempty.innerText += "L";
	}
	if(event.code == "KeyM") {
		typeempty.innerText += "M";
	}
	if(event.code == "KeyN") {
		typeempty.innerText += "N";
	}
	if(event.code == "KeyO") {
		typeempty.innerText += "O";
	}
	if(event.code == "KeyP") {
		typeempty.innerText += "P";
	}
	if(event.code == "KeyQ") {
		typeempty.innerText += "Q";
	}
	if(event.code == "KeyR") {
		typeempty.innerText += "R";
	}
	if(event.code == "KeyS") { 
		typeempty.innerText += "S";
	}
	if(event.code == "KeyT") {
		typeempty.innerText += "T";
	}
	if(event.code == "KeyU") {
		typeempty.innerText += "U";
	}
	if(event.code == "KeyV") {
		typeempty.innerText += "V";
	}
	if(event.code == "KeyW") {
		typeempty.innerText += "W";
	}
	if(event.code == "KeyX") {
		typeempty.innerText += "X";
	}
	if(event.code == "KeyY") {
		typeempty.innerText += "Y";
	}
	if(event.code == "KeyZ") {
		typeempty.innerText += "Z";
	}
	if(event.code == "Backspace") {
		typeempty.innerText = typeempty.innerText.slice(0,-1);
	}
	if(event.code == "Enter"){
		if(typeempty.innerText == letterTitle.innerText){
				alert("Nice Work! You are Learning!");
		} else if (typeempty.innerText !== letterTitle.innerText){
				alert("You're Learning, Please try again. ")
		}
	}
});
			

function Buildalphabet(letter){
	
	const Buildalphabet = document.createElement("div");
	
	Buildalphabet.classList.add("letter");
	
	Buildalphabet.setAttribute("id", letter);
	
	Buildalphabet.innerText = letter;
	
	Buildalphabet.addEventListener("click", () =>{
		
		if(Buildalphabet.id == "Aa"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "APE";
		}
		if(Buildalphabet.id == "Bb"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "BAT";
		}
		if(Buildalphabet.id == "Cc"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "CAT";
		}
		if(Buildalphabet.id == "Dd"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "DOG";
		}
		if(Buildalphabet.id == "Ee"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "EAT";
		}
		if(Buildalphabet.id == "Ff") {
			spell.innerText = "Spell: "
			letterTitle.innerText = "FAT";
		}
		if(Buildalphabet.id == "Gg"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "GOD";
		}
		if(Buildalphabet.id == "Hh"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "HIT";
		}
		if(Buildalphabet.id == "Ii"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "INN";
		}
		if(Buildalphabet.id == "Jj"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "JET";
		}
		if(Buildalphabet.id == "Kk"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "KIT";
		}
		if(Buildalphabet.id == "Ll"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "LOT";
		}
		if(Buildalphabet.id == "Mm"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "MAN";
		}
		if(Buildalphabet.id == "Nn"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "NUT";
		}
		if(Buildalphabet.id == "Oo"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "OUT";
		}
		if(Buildalphabet.id == "Pp"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "PEN";
		}
		if(Buildalphabet.id == "Qq"){
			spell.innerText = "Find: "
			letterTitle.innerText = "Q";
		}
		if(Buildalphabet.id == "Rr"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "RET";
		}
		if(Buildalphabet.id == "Ss"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "SUS";
		}
		if(Buildalphabet.id == "Tt"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "TIE";
		}
		if(Buildalphabet.id == "Uu"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "UP";
		}
		if(Buildalphabet.id == "Vv") {
			spell.innerText = "Spell: "
			letterTitle.innerText = "VIB";
		}
		if(Buildalphabet.id == "Ww"){
			spell.innerText = "Sell: "
			letterTitle.innerText = "WIG";
		}
		if(Buildalphabet.id == "Xx"){
			spell.innerText = "Find: "
			letterTitle.innerText = "X";
		}
		if(Buildalphabet.id == "Yy"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "YUT"
		}
		if(Buildalphabet.id == "Zz"){
			spell.innerText = "Spell: "
			letterTitle.innerText = "ZIG"
		}
	});

	return Buildalphabet;

}

for (a = 0; a < alphabetCount; a++){
	const randomIndex = Math.floor(Math.random() * alphabetpicker.length);
	const letter = alphabetpicker[randomIndex];
	const tile = Buildalphabet(letter);
	
	alphabetpicker.splice(randomIndex, 1);
	alphabetContainer.appendChild(tile);
				
}


