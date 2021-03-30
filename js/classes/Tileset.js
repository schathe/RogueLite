// console.log("fichier Tileset.js charghé");

function Tileset(img) {
	// Chargement de l'image dans l'attribut image
	this.image = img;
}

// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées x et y
Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination) {
	this.largeur = this.image.width / 32;
	let xSourceEnTiles = numero % this.largeur;
	if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
	let ySourceEnTiles = Math.ceil(numero / this.largeur);
	let xSource = (xSourceEnTiles - 1) * 32;
	let ySource = (ySourceEnTiles - 1) * 32;
	context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
}
