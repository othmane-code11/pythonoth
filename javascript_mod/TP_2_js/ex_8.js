const article = {
    nom : "Chocolat",
    prix : 2.5,
    quantite : 10
}

while (article.quantite >= 0) {
    console.log(article.quantite);
    article.quantite -= 1;
}

console.log('Produit épuisé');