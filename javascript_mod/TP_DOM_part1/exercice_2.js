// Créer un conteneur principal
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Ajouter un titre
const title = document.createElement('h1');
title.textContent = 'Page simple avec JavaScript';
container.appendChild(title);

// Ajouter un paragraphe
const paragraph = document.createElement('p');
paragraph.textContent = 'Texte modifié';
container.appendChild(paragraph);

// Ajouter une liste
const list = document.createElement('ul');
['Item 1', 'Item 2', 'Item 3'].forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});
container.appendChild(list);

// Bouton pour ajouter un élément
const addButton = document.createElement('button');
addButton.textContent = 'Ajouter un item';
addButton.onclick = () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Nouvel item';
    list.appendChild(newItem);
};
container.appendChild(addButton);

// Bouton pour supprimer un élément
const removeButton = document.createElement('button');
removeButton.textContent = 'Supprimer un item';
removeButton.onclick = () => {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
};
container.appendChild(removeButton);

// Bouton pour changer le texte
const changeTextButton = document.createElement('button');
changeTextButton.textContent = 'Modifier le texte';
changeTextButton.onclick = () => {
    paragraph.textContent = 'Texte mis à jour!';
};
container.appendChild(changeTextButton);

// Bouton pour changer la couleur de fond
const changeBgButton = document.createElement('button');
changeBgButton.textContent = 'Changer la couleur';
changeBgButton.onclick = () => {
    container.style.backgroundColor = 'lightblue';
};
container.appendChild(changeBgButton);
