// En JS il y a de nombreux objets déjà instancié

// Car définis par le langage ECMAScript :
console.log(typeof Math); // object
console.log(typeof JSON); // object
console.log(typeof Intl); // object

// Les fonctions sont des objets 
console.log(typeof String); // function
console.log(String instanceof Object); // true
console.log(Array instanceof Object); // true
console.log(Boolean instanceof Object); // true
console.log(Number instanceof Object); // true

// Selon la plateforme utilisée pour exécuter son JS
// d'autres objets peuvent être ajoutés :

// Sous Node.js :
console.log(typeof process);
console.log(typeof exports);
console.log(typeof module);

// Dans le navigateurs (API Webs) :
console.log(typeof window);
console.log(typeof document);
console.log(typeof navigator);
console.log(typeof location);
console.log(typeof localStorage);

// Parfois les objets existent dans plusieurs plateformes ex :
console.log(typeof console);

// l'objet JS est un système dynamique, contrairement à Java ou C#
// où l'objet est statique, on peut n'importe où ajouter, modifier, supprimer 
// son contenu :

console.log(Math.random());
console.log(Math.sum);

// Math.sum n'existe pas, on peut la créer (extension d'objet) :
Math.sum = function (a, b) {
  return a + b;
};

console.log(Math.sum(1, 2));

// Modifier la clé/valeur
Math.sum = function (a, b) {
  return Number(a) + Number(b);
};

// Supprimer
delete Math.sum;
console.log(Math.sum); // undefined

// Attention : c'est une mauvaise pratique de modifier les objets
// existants (ceux du début de fichiers, des libs) dans les sources
// Ok dans les tests automatisés (exemple, remplacer Math.random
// le temps de tester une fonction qui dépend de Math.random)

// Quelques APIs lié à l'objet et aux concepts :
console.log(Object.keys({x: 1, y: 2, infos() {}})); // ['x', 'y', 'infos']
console.log(Object.values({x: 1, y: 2})); // [1, 2]

// defineProperty = extension d'objet mais plus fine (enumerable)
console.log(Object.defineProperty({}, 'x', { value: 1, enumerable: true }));
console.log(Object.isExtensible(console)); // true
Object.preventExtensions(console); // définitif (jusqu'au prochain rechargement de la page)
console.log(Object.isExtensible(console)); // false

// 2 systèmes pour créer des objets
// on utile object literal si l'objet n'est créé qu'une seule fois
// ou s'il est créé plusieurs fois il ne doit pas avoir de méthodes

// object literal (on créé l'objet directement)
const coords1 = {x: 1, y: 2, infos() { }};
const coords2 = {x: 1, y: 2, infos() { }};

// ici il y a autant de méthode infos que d'objet coords (conso mémoire -> bof)
// les fonctions sont elles mêmes des objets (comme vu en début de chapitre)
// donc ici on compare les références de ces objets
// soit le test retourne true et on a 1 seul objet en mémoire
// soit false et on en a 2 
console.log(coords1.infos === coords2.infos); // false

// s'il n'y avait qu'une seule instance, pas de problème pour object literal :
// ici MyMath est un moyen de regrouper 2 fonction,
// on appelle ça un namespace object
const MyMath = {
  sum(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
}

// constructor (fonction constructeur)
// ressemble à une classe, sans en être une puisque les propriétés/clés x et y sont créées dynamiquement
// il pourrait y avoir un if () pour ne pas les créer et elles pourraient être supprimées avec un delete
function Coords(x, y) {
  this.x = x;
  this.y = y;
}

Coords.prototype.infos = function() {};


const coordsA = new Coords(1, 2);
const coordsB = new Coords(3, 4);
console.log(coordsA.infos === coordsB.infos); // true


// Pour finir 
// une fonction constructeur depuis ES2015 ne s'écrit plus :
// function Coords(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Coords.prototype.infos = function() {};

// Mais avec le mot clé class :
// Ce n'est une classe : x et y, peuvent toujours etre créées conditionnellement et supprimées avec delete
// C'est du sucre syntaxique : syntaxe moderne pour être plus lisible (comme REST SPREAD...)

// class Coords {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   infos() { }
// }

// Pour récupérer infos, on peut toujours écrire Coords.prototype.infos