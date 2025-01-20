// Déclaration du tableau pour stocker les contacts
let contacts = [];

// Fonction pour générer un identifiant unique
function generateId() {
    return Date.now() + Math.random().toString(16).slice(2);
}

// Fonction pour ajouter un contact
function addContact(nom, email) {
    const contact = {
        id: generateId(),
        nom: nom,
        email: email
    };
    contacts.push(contact);
    displayContacts();
    clearInputs();
}

// Fonction pour afficher tous les contacts dans une table
function displayContacts() {
    const contactTable = document.getElementById('contact-table-body');
    contactTable.innerHTML = '';
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.id}</td>
            <td>${contact.nom}</td>
            <td>${contact.email}</td>
            <td>
                <button onclick="editContact('${contact.id}')">Modifier</button>
                <button onclick="deleteContact('${contact.id}')">Supprimer</button>
            </td>
        `;
        contactTable.appendChild(row);
    });
}

// Fonction pour effacer les inputs
function clearInputs() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
}

// Fonction pour modifier un contact
function updateContact(id, nouveauNom, nouvelEmail) {
    const contact = contacts.find(c => c.id === id); // find retourn le premier contact avec l'id correspondant
    if (contact) {
        contact.nom = nouveauNom;
        contact.email = nouvelEmail;
        displayContacts();
    } else {
        alert("Contact non trouvé avec l'ID fourni.");
    }
}

// Fonction pour supprimer un contact
function deleteContact(id) {
    const index = contacts.findIndex(c => c.id === id); //Si un contact avec l'ID correspondant est trouvé, l'indice (position dans le tableau) est assigné à index.
    if (index !== -1) { //Si aucun contact ne correspond, index vaut -1.
        contacts.splice(index, 1);
        displayContacts();
    } else {
        alert("Contact non trouvé avec l'ID fourni.");
    }
}

// Fonction pour ouvrir l'éditeur de contact
function editContact(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
        const nom = prompt("Entrez le nouveau nom :", contact.nom);
        const email = prompt("Entrez le nouvel email :", contact.email);
        if (nom && email) {
            updateContact(id, nom, email);
        }
    } else {
        alert("Contact non trouvé avec l'ID fourni.");
    }
}
