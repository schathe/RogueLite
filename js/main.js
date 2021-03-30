// Vérifie qu'on rentre dans le fichier
// console.log("Le fichier main.js est bien chargé");

// Déclaration de constantes
const DUREE_ANIMATION = 3;
const DUREE_DEPLACEMENT = 12;

// Déclaration de varaibles
let map = new Map("mapTest");
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let joueur;
let niveau = 0;

// Actions au chargement de la page
window.onload = function() {
	// Charge toutes les images du projet au chargement de la page
	loadImage();

	// Mise en place de la taille du canvas
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
}

// Partie principale du programme
function main() {
	// Création du joueur et l'ajoute à une liste de personnage
	joueur = new Personnage(Perso, 7, 0, DIRECTION.DROITE);
	map.addPersonnage(joueur);

	// Set d'un intervalle pour le rafraichissement de la map
	setInterval(function() {
		// Dessine la map à chaque intervalle
		map.dessinerMap(ctx);
	}, 40);
}

// Gestion du clavier
window.onkeydown = function(event) {
	// Récupération des informations de l'appuie d'une touche
	let e = event || window.event;
	let key = e.which || e.keyCode;

	// Permet de savoir le numéro de la touche
	// this.alert(key);

	// Switch pour déplacer le joueur
	switch(key) {
		// Déplace le joueur vers le haut
		case 38 : case 119 : case 87 : // Flèche haut, w, W
			joueur.deplacer(DIRECTION.HAUT, map);
			break;
		// Déplace le joueur vers le bas
		case 40 : case 115 : case 83 : // Flèche bas, s, S
			joueur.deplacer(DIRECTION.BAS, map);
			break;
		// Déplace le joueur vers la gauche
		case 37 : case 97 : case 65 : // Flèche gauche, a, A
			joueur.deplacer(DIRECTION.GAUCHE, map);
			break;
		// Déplace le joueur vers la droite
		case 39 : case 100 : case 68 : // Flèche droite, d, D
			joueur.deplacer(DIRECTION.DROITE, map);
			break;
		// effectue un changement de niveau
		case 78 : // n
			// ajoute 1 au compteur du niveau et actualise la niveau
			niveau++;
			map.changerNiveau(niveau);
			break;

		default : 
			// Rend une touche inutile pour le jeu sans effet pour le jeu
			return true;
	}
	
	return false;
}
