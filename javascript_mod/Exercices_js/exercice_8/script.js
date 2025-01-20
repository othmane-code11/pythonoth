// Tableau pour stocker les étudiants
const etudiants = [];

// Fonction pour afficher la liste des étudiants
function afficherEtudiants() {
    const resultatDiv = document.getElementById('resultat');
    if (!resultatDiv) {
        const newDiv = document.createElement('div');
        newDiv.id = 'resultat';
        document.body.appendChild(newDiv);
    }

    const resultat = document.getElementById('resultat');
    resultat.innerHTML = `<h2>Liste des Étudiants</h2>`;

    etudiants.forEach((etudiant, index) => {
        const etudiantDiv = document.createElement('div');
        etudiantDiv.textContent = `${index + 1} => Nom: ${etudiant.nom}, Age: ${etudiant.age}, Note: ${etudiant.note}`;
        resultat.appendChild(etudiantDiv);
    });
}

// Fonction pour ajouter un étudiant
function ajouterEtudiant(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs de texte
    const nom = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const note = document.getElementById('note').value;

    // Vérifier que tous les champs sont remplis
    if (nom && age && note) {
        // Créer un objet étudiant
        const etudiant = {
            nom: nom,
            age: parseInt(age),
            note: parseFloat(note)
        };

        // Ajouter l'étudiant au tableau
        etudiants.push(etudiant);

        // Mettre à jour l'affichage
        afficherEtudiants();

        // Réinitialiser les champs de saisie
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('note').value = '';
    } else {
        alert('Veuillez remplir tous les champs !');
    }
}

// Ajouter un gestionnaire d'événement au formulaire
document.getElementById('formulaire').addEventListener('submit', ajouterEtudiant);