// Exercice 2
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

console.log(`number 1 est: ${num1}`);
console.log(`number 2 est: ${num2}`);

let somme = num1 + num2;
let difference = num1 - num2;
let produit = num1 * num2;
let quotient = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'division sur zero est impossible !!!';

console.log(`Somme : ${somme}`);
console.log(`Différence : ${difference}`);
console.log(`Produit : ${produit}`);
console.log(`Quotient : ${quotient}`);