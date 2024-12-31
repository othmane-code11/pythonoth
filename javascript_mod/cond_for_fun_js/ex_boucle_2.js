let i = 1;
let cmpt = 0;
while (i <= 50) {
    if (i % 2 == 0) {
        cmpt += 1;
    }
    i += 1;
}
console.log(`le nombre des pairs de 1 à 50 est => ${cmpt}`);