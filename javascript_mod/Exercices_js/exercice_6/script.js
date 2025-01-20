// Tableau avec trois objets
let etudiants = [
    { nom: "ali", age: 22, note: 15 },
    { nom: "ahmed", age: 21, note: 18 },
    { nom: "simo", age: 20, note: 14 }
];

// Récuperer l'id resultat
let resultatDiv = document.getElementById("resultat");

// Parcourir le tableau et créer dynamiquement un élément <p> pour chaque étudiant
etudiants.forEach(etudiant => {
    let paragraphe = document.createElement("p");
    paragraphe.textContent = `Nom: ${etudiant.nom}, Age: ${etudiant.age}, Note: ${etudiant.note}`;
    resultatDiv.appendChild(paragraphe);
});