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
			let Aaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/A.m4a");
			Aaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "APE";
		}
		if(Buildalphabet.id == "Bb"){
			let Baudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/B.m4a");
			Baudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "BAT";
		}
		if(Buildalphabet.id == "Cc"){
			let Caudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/C.m4a");
			Caudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "CAT";
		}
		if(Buildalphabet.id == "Dd"){
			let Daudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/D.m4a");
			Daudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "DOG";
		}
		if(Buildalphabet.id == "Ee"){
			let Eaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/E.m4a");
			Eaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "EAT";
		}
		if(Buildalphabet.id == "Ff") {
			let Faudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/F.m4a");
			Faudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "FAT";
		}
		if(Buildalphabet.id == "Gg"){
			let Gaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/G.m4a");
			Gaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "GOD";
		}
		if(Buildalphabet.id == "Hh"){
			let Haudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/H.m4a");
			Haudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "HIT";
		}
		if(Buildalphabet.id == "Ii"){
			let Iaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/I.m4a");
			Iaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "INN";
		}
		if(Buildalphabet.id == "Jj"){
			let Jaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/J.m4a");
			Jaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "JET";
		}
		if(Buildalphabet.id == "Kk"){
			let Kaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/K.m4a");
			Kaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "KIT";
		}
		if(Buildalphabet.id == "Ll"){
			let Laudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/L.m4a");
			Laudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "LOT";
		}
		if(Buildalphabet.id == "Mm"){
			let Maudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/M.m4a");
			Maudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "MAN";
		}
		if(Buildalphabet.id == "Nn"){aimg
			let Naudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/N.m4a");
			Naudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "NUT";
		}
		if(Buildalphabet.id == "Oo"){
			let Oaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/O.m4a");
			Oaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "OUT";
		}
		if(Buildalphabet.id == "Pp"){
			let Paudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/P.m4a");
			Paudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "PEN";
		}
		if(Buildalphabet.id == "Qq"){
			let Qaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/Q.m4a");
			Qaudio.play();
			spell.innerText = "Find: "
			letterTitle.innerText = "Q";
		}
		if(Buildalphabet.id == "Rr"){
			let Raudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/R.m4a");
			Raudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "RET";
		}
		if(Buildalphabet.id == "Ss"){
			let Saudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/S.m4a");
			Saudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "SIN";
		}
		if(Buildalphabet.id == "Tt"){
			let Taudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/T.m4a");
			Taudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "TIE";
		}
		if(Buildalphabet.id == "Uu"){
			let Uaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/U.m4a");
			Uaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "UP";
		}
		if(Buildalphabet.id == "Vv") {
			let Vaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/V.m4a");
			Vaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "VIB";
		}
		if(Buildalphabet.id == "Ww"){
			let Waudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/W.m4a");
			Waudio.play();
			spell.innerText = "Sell: "
			letterTitle.innerText = "WIG";
		}
		if(Buildalphabet.id == "Xx"){
			let Xaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/X.m4a");
			Xaudio.play();
			spell.innerText = "Find: "
			letterTitle.innerText = "X";
		}
		if(Buildalphabet.id == "Yy"){
			let Yaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/Y.m4a");
			Yaudio.play();
			spell.innerText = "Spell: "
			letterTitle.innerText = "YUT"
		}
		if(Buildalphabet.id == "Zz"){
			let Zaudio = new Audio("../wicket/resource/sbtech.NG.AlphaLN/audioRec/Z.m4a");
			Zaudio.play();
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


