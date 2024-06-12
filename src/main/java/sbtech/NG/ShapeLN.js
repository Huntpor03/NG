const shapeContainer = document.querySelector(".shapes");
const shapes = ["square","rectangle","triangle","circle","diamond","hexigon","star","heart"];
const shapepicker = [...shapes];
const shapecount = shapepicker.length;

function createShape(shape){
	
	const createShape = document.createElement("img");
	
	createShape.classList.add("shape");
		
	createShape.src = "../wicket/resource/sbtech.NG.ShapeLN/shapeimg/" + shape + ".jpg";

return createShape;

}	
for(s = 0; s < shapecount; s++){
	const randomIndex = Math.floor(Math.random() * shapepicker.length);
	const shape = shapepicker[randomIndex];
	const tile = createShape(shape);
	
	shapepicker.splice(randomIndex, 1);
	shapeContainer.appendChild(tile);
}