const alphabetContainer = document.querySelector(".alphabet");
const choiceContainer = document.querySelector(".choiceletter");
const aContainer = document.querySelector(".aletter");
const bContainer = document.querySelector(".bletter");
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const alphabet = ["Aa","Bb","Cc", "Dd","Ee","Ff","Gg","Hh", "Ii","Jj","Kk","Ll","Mm","Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"];
const aimg = ['A'];
const bimg = ['B'];
const alphabetpicker = [...alphabet];
const alphabetCount = alphabetpicker.length;

const letterTitle = document.getElementById("lettered");

aContainer.addEventListener('dragstart', dragStart);
aContainer.addEventListener('dragend', dragEnda);
bContainer.addEventListener('dragstart', dragStart);
bContainer.addEventListener('dragend', dragEndb);

aimg.forEach(function(image){
	const img = document.createElement('img');
	img.src = "../wicket/resource/sbtech.NG.AlphaLN/alphaimg/" + image + ".jpg";
	img.classList.add('fill');
	img.id = image;
	choiceContainer.appendChild(aContainer);
	aContainer.append(img);
	
	return image;
});
bimg.forEach(function(image){
	const img = document.createElement('img');
	img.src = "../wicket/resource/sbtech.NG.AlphaLN/alphaimg/" + image + ".jpg";
	img.classList.add('fill');
	img.id = image;
	choiceContainer.appendChild(bContainer);
	bContainer.append(img);
	
	return image;
});

function Buildalphabet(letter){
	
	const Buildalphabet = document.createElement("div");
	
	Buildalphabet.classList.add("letter");
	
	Buildalphabet.setAttribute("id", letter);
	
	Buildalphabet.innerText = letter;
	
	Buildalphabet.addEventListener("click", () =>{
		
		letterTitle.innerText = "" + letter + ":";
		
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

for(const empty of empties){
	empty.addEventListener('dragover',dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}


function dragStart() {
	this.className += ' hold';
	//setTimeout(()=> this.className = "invisable",0);
}

function dragEnda() {
		this.className  = "aletter";
}
function dragEndb(){
	this.className = "bletter";
}
function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
}

function dragLeave() {
	this.className = 'empty';
}

function dragDrop() {
	this.className = 'empty';
	if(this.className == "empty"){
		this.appendChild(aContainer);
	}
}

