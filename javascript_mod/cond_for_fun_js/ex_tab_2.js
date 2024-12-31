function maximum(tab) {
    let max = tab[0];
    for (let i in tab) {
        if (max < tab[i]) {
            max = tab[i];
        }
    }
    return max;
}
console.log(`la valeur maximum est => ${maximum([1, 2, 3, 4, 5, 6, 3])}`);
