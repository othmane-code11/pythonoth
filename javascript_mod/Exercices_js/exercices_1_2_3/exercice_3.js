// exercice 3
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
        console.log(`Nombre pair : ${tab[i]}`);
    }
    else {
        console.log(`Nombre impair : ${tab[i]}`);
    }
}