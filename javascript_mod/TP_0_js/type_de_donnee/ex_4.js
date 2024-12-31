console.log("---------- Exercice 1---------------");


// Exercice 1 : Manipuler des chaînes de caractères
// 1.
// Déclarez une chaîne "Apprendre JavaScript est amusant !".
// Affichez sa longueur.
// Transformez-la en majuscules.
// Extrayez le mot "JavaScript".
// Vérifiez si elle contient le mot "amusant".
// 2.
// Essayez de concaténer "Bonjour" avec " le monde !", puis transformez le résultat en majuscules.
let chaine = "Apprendre JavaScript est amusant !";
console.log(chaine.length);
console.log(chaine.toUpperCase());
console.log(chaine.slice(10, 19));
console.log(chaine.includes('amusant'));
let concat = "Bonjour " + "le monde"
console.log(concat);