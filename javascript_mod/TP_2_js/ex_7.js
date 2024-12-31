// Parcourez les propriétés de l'objet créé précédemment avec une boucle, et affichez chaque clé et sa valeur dans la console.
const article = {
    nom : "Chocolat",
    prix : 2.5,
    quantite : 10
}
for (let prop in article) {
    console.log(`${prop} => ${article[prop]}`);
}