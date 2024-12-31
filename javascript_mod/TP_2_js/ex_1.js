// ex_1: Écrivez un programme qui vérifie si un client est majeur ou mineur.
// Si le client a 18 ans ou plus, affichez "Accès autorisé". Sinon, affichez "Accès refusé".
// #########################################
let age = parseInt(prompt('Veuillez saisir votre age: '));
if (age >= 18) {
    console.log("Accès autorisé");
}
else {
    console.log("Accès refusé");
}