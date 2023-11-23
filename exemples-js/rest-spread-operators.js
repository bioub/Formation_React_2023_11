// REST et SPREAD
// 2 opérateurs assez proches 
// qu'on peut utiliser
// sur des tableaux depuis ES2015
// sur des objets depuis ES2018

const nbs = [2, 3, 4];

// Sans SPREAD
// const newNbs = [1, nbs[0], nbs[1], nbs[2], 5];

// Avec SPREAD
// écrit le contenu du tableau
// conversion de syntaxe :
// tableau -> une liste d'élément (contenus dans le tableau)
const newNbs = [1, ...nbs, 5];

// Idem sur des objets
const coords = { x: 1, y: 2 };

// Sans SPREAD
// const coords3d = { x: coords.x, y: coords.y, z: 3 }

// Avec SPREAD
// écrit le contenu de l'objet
// conversion de syntaxe :
// object -> une liste de clé/valeur (contenus dans l'objet)
const coords3d = { ...coords, z: 3 }



// Destructurer un tableau (ES2015)
// plus court d'écrire :
//       [2   , 3    ,      4]
// const [deux, trois, quatre] = nbs;
// au lieu de :
// const deux = nbs[0]
// const trois = nbs[1]
// const quatre = nbs[2]

// REST est l'inverse de SPREAD
// conversion de syntaxe :
// une liste d'élément (contenus dans le tableau) -> tableau

//    [2   , 3, 4       ]
const [deux, ...otherNbs] = nbs;

console.log(otherNbs); // [3, 4]
