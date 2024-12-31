let personne = {
    nom : 'othmane',
    age : '22',
    profession : 'programmer',
    meth() {
        console.log(`Votre nom est ${this.nom}, votre age est ${this.age}, et votre profession est ${this.profession}`);
    }
};
personne.meth();