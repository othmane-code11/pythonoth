let obj = {
    'prenom' : 'oth',
    'age' : '22'
}
let i;
for (i in obj) {
    console.log(`${i} => ${obj[i]}`);
}