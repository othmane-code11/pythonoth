let produits = [
    { nom: "Pomme", quantite: 5 },
    { nom: "Banane", quantite: 0 },
    { nom: "Orange", quantite: 10 },
];
// console.log(produits);
function produis_exist (list, name) {
    let exist = false;
    for (let obj in list) {  //obj => 0, 1, 2
        // console.log(list[obj].nom);
        if (name === list[obj].nom) {
            exist = true
        }
    }
    if (exist === false) {
        console.log('Produit non trouvé')
    }
}
produis_exist(produits, 'Banane')