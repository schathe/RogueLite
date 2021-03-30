let Perso = new Image();
let MapTileset = new Image();

function loadImage() {
	Perso.onload = function(){
		MapTileset.onload = function(){
			imageLoaded();
		}
		MapTileset.src = "https://schathe.divtec.me/RG/tilesets/tilesetChemin.png";
	}
	Perso.src = "https://schathe.divtec.me/RG/sprites/character.png";
}

function imageLoaded(){
	// console.log("images load");
	main();
}