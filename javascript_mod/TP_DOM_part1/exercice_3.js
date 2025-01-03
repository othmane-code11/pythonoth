// Créer un élément <div>
const element = document.createElement('div');
element.textContent = "Texte initial";
element.style.padding = "20px";
element.style.textAlign = "center";
element.style.border = "1px solid black";
document.body.appendChild(element);

// Ajouter un bouton "Modifier contenu"
const modifyContentBtn = document.createElement('button');
modifyContentBtn.textContent = "Modifier contenu";
modifyContentBtn.onclick = () => {
    element.textContent = "Contenu modifié";
};
document.body.appendChild(modifyContentBtn);

// Ajouter un bouton "Modifier style"
const modifyStyleBtn = document.createElement('button');
modifyStyleBtn.textContent = "Modifier style";
modifyStyleBtn.onclick = () => {
    element.style.backgroundColor = "lightblue";
    element.style.color = "darkblue";
    element.style.width = "500px";
    element.style.height = "100px";
};
document.body.appendChild(modifyStyleBtn);

// Ajouter un bouton "Modifier couleur"
const modifyColorBtn = document.createElement('button');
modifyColorBtn.textContent = "Modifier couleur";
modifyColorBtn.onclick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    element.style.backgroundColor = randomColor;
    element.textContent = `Couleur modifiée ${randomColor}`;
};
document.body.appendChild(modifyColorBtn);

// Ajouter un bouton "Toggle Classe"
const toggleClassBtn = document.createElement('button');
toggleClassBtn.textContent = "Toggle Classe";
toggleClassBtn.onclick = () => {
    element.classList.toggle("bordeur");
};
document.body.appendChild(toggleClassBtn);
