// ex_6 Utilisez une boucle pour calculer la somme des prix dans le tableau suivant : prixProduits = [10, 15, 20].
let prixProduits = [3, 5, 2];
let somme = 0;
let m;
for (let i = 0; i < prixProduits.length; i++) {
    somme += parseInt(prixProduits[i]) ;
}
m = somme / prixProduits.length;
console.log(`La somme des prix est: ${somme}`);
console.log(`La moyenne des prix est: ${m.toFixed(2)}`);
