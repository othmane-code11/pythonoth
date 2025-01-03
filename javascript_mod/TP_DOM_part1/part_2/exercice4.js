// Créer le conteneur principal de la galerie
const galleryContainer = document.createElement('div');
galleryContainer.id = 'gallery';
galleryContainer.style.display = 'flex';
galleryContainer.style.flexWrap = 'wrap';
galleryContainer.style.gap = '10px';
document.body.appendChild(galleryContainer);

// Compteur pour les images
let imageCounter = 0;

// Fonction pour ajouter une nouvelle image
const addImage = () => {
    imageCounter++;
    const figure = document.createElement('figure');
    figure.style.textAlign = 'center';

    const img = document.createElement('img');
    img.src = `images.jpeg`;
    img.alt = `Image ${imageCounter}`;
    img.style.width = '150px';
    img.style.height = '150px';

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `Image ${imageCounter}`;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryContainer.appendChild(figure);
};

// Fonction pour supprimer la dernière image
const removeLastImage = () => {
    if (galleryContainer.lastChild) {
        galleryContainer.removeChild(galleryContainer.lastChild);
        imageCounter -= 1;
    }
};

// Fonction pour changer la taille des images
const changeImageSize = () => {
    const images = galleryContainer.querySelectorAll('img');
    images.forEach(img => {
        img.style.width = '200px';
        img.style.height = '200px';
    });
};

// Ajouter un bouton "Ajouter une image"
const addButton = document.createElement('button');
addButton.textContent = 'Ajouter une image';
addButton.onclick = addImage;
document.body.appendChild(addButton);

// Ajouter un bouton "Supprimer la dernière image"
const removeButton = document.createElement('button');
removeButton.textContent = 'Supprimer la dernière image';
removeButton.onclick = removeLastImage;
document.body.appendChild(removeButton);

// Ajouter un bouton "Changer la taille des images"
const resizeButton = document.createElement('button');
resizeButton.textContent = 'Changer la taille des images';
resizeButton.onclick = changeImageSize;
document.body.appendChild(resizeButton);
