// exercice 4
// Sélectionne un élément <div> avec un id de contenu.
// Ajoute le texte "Bienvenue sur ma page web !" à ce <div>.
// Change la couleur du texte du <div> en bleu.
// Ajoute une bordure rouge autour du <div>.
let contenu = document.getElementById('contenu');
contenu.textContent = "Bienvenue sur ma page web !";
contenu.style.color = 'blue';
contenu.style.border = 'red solid 2px';
let contenu_2 = document.getElementById('contenu_2');
contenu_2.textContent = "Bienvenue sur ma page web 2 !";
contenu_2.style.color = 'red';
contenu_2.style.border = 'black solid 2px';