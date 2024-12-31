// ex_3 Créez une fonction appelée calculerPrixTTC qui prend 
// en paramètres un prix (hors taxes) et un taux de TVA, puis retourne le prix TTC.

let prixHT = parseInt(prompt('Veuillez saisir le prix hors taxe: '));
let TVA = parseFloat(prompt('Veuillez saisir le taux de TVA: '));
let prixTTC;
function calculerPrixTTC(prHT, TVA_f) {
    return prHT * (1 + TVA_f);
}
prixTTC = calculerPrixTTC(prixHT, TVA)
console.log(`Le prix TTC est: ${prixTTC}`);
