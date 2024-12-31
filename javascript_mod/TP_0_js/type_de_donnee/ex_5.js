console.log('-------- Exercice 2--------');
// Exercice 2 : Travailler avec des nombres
// 1.
// Prenez le nombre 42.789.
// Arrondissez-le au supérieur.
// Arrondissez-le à deux décimales.
// Multipliez-le par un nombre aléatoire entre 0 et 10.
// 2.
// Générer un nombre aléatoire entre 1 et 6 (comme un lancer de dé).

let f = 42.789;
console.log(Math.ceil(f));
console.log(f.toFixed(2));
console.log(f * Math.floor(Math.random() * 11));
console.log(Math.floor((Math.random() * 6) + 1));