function puissance(num, pow) {
    if (pow == 0) {
        return 1;
    }
    else{
        return num * puissance(num, pow - 1);
    }
}
let p = puissance(2, 3);
console.log(p);