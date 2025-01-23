let produits = [
    { nom: "Pomme", quantite: 5 },
    { nom: "Banane", quantite: 0 },
    { nom: "Orange", quantite: 10 },
];
function trouver(lst, name) {
    let ex = false;
    for (let obj in lst) {
        if (lst[obj].quantite != 0 && lst[obj].nom == name) {
            ex = true;
            break;
        }
    }
    if (ex == true) {
            console.log(`${name} exist`);
    }
    else {
            console.log(`${name} non exist`);
    }
}

trouver(produits, 'Banane')