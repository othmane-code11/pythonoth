function inverse (tab) {
    let x;
    for (let i = 0; i < tab.length/2; i++) {
        j = tab.length - i - 1;
        x = tab[i];
        tab[i] = tab[j];
        tab[j] = x;
    }
    console.log(tab);
}
inverse([1,2,3,5,4])