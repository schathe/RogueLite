let mapData;

// Constructeur de la classe map
function Map(nom) {
	
	// Création de l'objet XmlHttpRequest, permet la récupération du json des maps
	let xhr = new XMLHttpRequest();

	// Chargement du fichier json mapTest.json
	xhr.open("GET", './maps/' + nom + '.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	let mapJsonData = xhr.responseText;
	
	// Traitement du fichier json
	mapData = JSON.parse(mapJsonData);
	this.tileset = new Tileset(MapTileset);
	this.terrain = mapData.maps[0].terrain;
	// Liste des personnages présents sur le terrain.
	this.personnages = new Array();
}

// Pour récupérer la taille (en tiles) de la carte
Map.prototype.getHauteur = function() {
	return this.terrain.length;
}

// Change le niveau pour le niveau passé en paramètre
Map.prototype.changerNiveau = function (niveau) {
	this.terrain = mapData.maps[niveau].terrain;
	this.personnages[0].setJoueur(mapData.maps[niveau].xJoueur, mapData.maps[niveau].yJoueur, mapData.maps[niveau].direction);
}

// Récupère la largueur du terrain
Map.prototype.getLargeur = function() {
	return this.terrain[0].length;
}

Map.prototype.dessinerMap = function(context) {
	for(let i = 0, l = this.terrain.length ; i < l ; i++) {
		let ligne = this.terrain[i];
		let y = i * 32;
		for(let j = 0, k = ligne.length ; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}
    
	// Dessin des personnages
	for(let i = 0, l = this.personnages.length ; i < l ; i++) {
		this.personnages[i].dessinerPersonnage(context);
		// affiche une information pour vérifier si le personnage est affiché
		// console.log("le personnage " + i + " devrait être affiché...");
	}
}

// Pour ajouter un personnage
Map.prototype.addPersonnage = function(perso) {
	this.personnages.push(perso);
}
