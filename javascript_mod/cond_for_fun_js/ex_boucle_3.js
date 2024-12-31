let entree = 6;
let i;
do {
    i = parseInt(prompt('deviner un nombre entre 1 et 10: '));
    if (entree == i) {
        console.log('bravo!');
        break;
    }
} while (i !== entree);
