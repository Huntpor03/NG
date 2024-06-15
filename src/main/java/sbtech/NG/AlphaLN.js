const alphabetContainer = document.querySelector(".alphabet");
const choiceContainer = document.querySelector(".choiceletter");

const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const alphabet = ["Aa","Bb","Cc", "Dd","Ee","Ff","Gg","Hh", "Ii","Jj","Kk","Ll","Mm","Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"];
const aimg = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const alphabetpicker = [...alphabet];

const letterpicker = [...aimg];
const alphabetCount = alphabetpicker.length;

const letterTitle = document.getElementById("lettered");

const img = document.createElement('img');

let draggedItem = null;

//Container.addEventListener('dragstart', dragStart);
//aContainer.addEventListener('dragend', dragEnda);
//bContainer.addEventListener('dragstart', dragStart);
//bContainer.addEventListener('dragend', dragEndb);


for(const empty of empties){
	empty.addEventListener('dragover', function dragOver(e) {
			console.log('dragover');
			e.preventDefault();
		});
	empty.addEventListener('dragenter', function dragEnter(e) {
			console.log('dragenter');
			e.preventDefault();
			this.className += ' hovered';
		});
	empty.addEventListener('dragleave', function dragLeave() {
			console.log('dragleave');
			this.className = 'empty';
		});
		empty.addEventListener('drop', function dragDrop() {
			console.log('drop');
			this.append(img, img.src = "../wicket/resource/sbtech.NG.AlphaLN/alphaimg/" + img + ".jpg", img.classList.add('fill'), img.setAttribute("draggable", true));
			
		});
}

for (let i = 0; i < choiceContainer.length; i++){
		
		const item = choiceContainer[i];
		
		item.addEventListener('dragstart', function dragEnter() {
						draggedItem = item;
						item.className += ' hold';
						setTimeout(()=> item.className = "invisable",0);
				});
		item.addEventListener('dragend', function dragEnd() {
						item.className  = "fill";
				});
}
aimg.forEach(function createImage(image){
				const img = document.createElement('img');
				img.src = "../wicket/resource/sbtech.NG.AlphaLN/alphaimg/" + image + ".jpg";
				img.classList.add('fill');
				img.setAttribute("draggable", true);
				img.id = image;
				choiceContainer.append(img);	
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

/*

function dragEnda() {
		this.className  = "aletter";
		
}


//function dragEndb(){
//	this.className = "bletter";
//}


*/

