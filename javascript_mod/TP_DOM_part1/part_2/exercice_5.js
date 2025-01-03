// Créer un conteneur pour le formulaire
const formContainer = document.createElement('div');
formContainer.id = 'form-container';
formContainer.style.padding = '30px';
formContainer.style.border = '1px solid #ccc';
formContainer.style.width = '300px';
formContainer.style.margin = '20px 500px';
document.body.appendChild(formContainer);

// Créer le formulaire
const form = document.createElement('form');
formContainer.appendChild(form);

// Ajouter un champ pour le nom
// Label 
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Nom: ';
form.appendChild(nameLabel);
// Input de nom
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';
nameInput.required = true;
form.appendChild(nameInput);

form.appendChild(document.createElement('br'));

// Ajouter un champ pour l'email
// Label
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email: ';
form.appendChild(emailLabel);
// imput d'email
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
emailInput.required = true;
form.appendChild(emailInput);

form.appendChild(document.createElement('br'));

// Ajouter un champ pour le mot de passe
// password
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Mot de passe: ';
form.appendChild(passwordLabel);
// input
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.required = true;
passwordInput.minLength = 8;
form.appendChild(passwordInput);

form.appendChild(document.createElement('br'));

// Ajouter un bouton "Soumettre"
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Soumettre';
form.appendChild(submitButton);

// Ajouter un bouton "Réinitialiser"
const resetButton = document.createElement('button');
resetButton.type = 'button';
resetButton.textContent = 'Réinitialiser';
resetButton.onclick = () => {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
};
form.appendChild(resetButton);
