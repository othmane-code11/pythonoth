produit = {
    'banane' : 12,
    'dalah' : 1,
    'la3nab' : 0,
    'tafah' : 21,
    'la3sal' : 0,
    'kaki' : 2,
}
function filtrerProduitsDisponibles(produit) {
    let produis_unique = []
    for (let i in produit) {
        if (produit[i] > 0) {
            produis_unique.push(i)
        }
    }
    console.log(produis_unique);
}
filtrerProduitsDisponibles(produit);
