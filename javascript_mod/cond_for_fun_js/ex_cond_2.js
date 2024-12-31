function temp (valeur) {
    if (valeur <= 10) {
        console.log('Froid');
    }
    else if (valeur <= 25) {
        console.log('Tempéré');
    }
    else {
        console.log('Chaud');
    }
}
temp(3);