console.log('-------------Exercice Pratique ---------');
// Exercices Pratiques
// 1.
// Variables et Affichage
// Déclarez trois variables : prénom, âge, et ville.
// Affichez : Bonjour, je m'appelle [prénom], j'ai [âge] ans et je vis à [ville].
let pr = prompt('entrer votre prenom: ');
let agee = prompt('entrer votre age: ');
let ville = prompt('entrer votre ville: ');

console.log(`Bonjour, je m'appelle ${pr}, j'ai ${agee} ans et je vis à ${ville}.`);

/*
Manipulation de Chaînes
Demandez une phrase à l’utilisateur.
Affichez :
▪La longueur de la phrase.
▪Les trois premiers mots.
▪La phrase en majuscules.
*/

phrase = prompt('entrez une phrase : ');

console.log(phrase.length);
console.log(phrase.slice(0, phrase.indexOf(' ')) + phrase.slice(phrase.indexOf(' '), ));
console.log(phrase.toUpperCase());