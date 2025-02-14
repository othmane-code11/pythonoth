// 1
let paragraphAjouter = document.createElement('p');
paragraphAjouter.textContent = 'Paragraphe dynamiquement ajouté';
document.body.appendChild(paragraphAjouter);
// 2
let titre = document.getElementById('titre');
titre.textContent = 'Bienvenue sur ma page';

// 3
let texte = document.getElementById('texte');
texte.classList.add('rouge');

// 4
let clicDetecte = document.getElementById('clic-detecte');
clicDetecte.addEventListener('click', () => {
    alert('Clic détecté');
    clicDetecte.remove();
})
// 5
let boutonSupprimer = document.getElementById('bouton-supprimer');
boutonSupprimer.addEventListener('click', () => {
    boutonSupprimer.remove();
});

// 6
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.classList.add('jaune')
});

// 7
let mofifierParag = document.getElementById('modifier-texte');
mofifierParag.addEventListener('click', () => {
    document.getElementById('paragraphe-modifiable').textContent = 'le texte est modifié 👌';
});

// 8
let noms = ['Othmane', 'ali', 'reda'];
let ulListe = document.createElement('ul');
noms.forEach(nom => {
    let li = document.createElement('li');
    li.textContent = `Mr ${nom}`;
    ulListe.appendChild(li);
});
document.body.appendChild(ulListe);

// 9
let compteur = 0;
let resultatCompteur = document.getElementById('resultat-compteur');
let incrementerBtn = document.getElementById('incrementer');
let resetBtn = document.getElementById('reset');

incrementerBtn.addEventListener('click', () => {
    compteur++;
    resultatCompteur.textContent = `Compteur : ${compteur}`;
});

resetBtn.addEventListener('click', () => {
    compteur = 0;
    resultatCompteur.textContent = 'Compteur réinitialisé';
});
// 10
let formulaireDynamique = document.getElementById('formulaire-dynamique');
let resultatFormulaire = document.getElementById('resultat-formulaire');
let ajouterChampBtn = document.getElementById('ajouter-champ');

ajouterChampBtn.addEventListener('click', () => {
    let input = document.createElement('input');
    input.type = 'text';
    formulaireDynamique.appendChild(input);
});

formulaireDynamique.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = formulaireDynamique.querySelector('input[type="text"]');
    let li = document.createElement('li');
    li.textContent = input.value;
    resultatFormulaire.appendChild(li);
    formulaireDynamique.reset();
});