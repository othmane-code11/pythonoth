let form = document.getElementById('formulaire');
let etudiants = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nom = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let note = document.getElementById('note').value;
    
    let etudiant = {
        nom,
        age,
        note
    };
    etudiants.push(etudiant);
    let resultat = document.getElementById('resultat');
    resultat.innerHTML = `<h1>La list des etudiants est:</h1>`

    etudiants.forEach((etu, index) => {
        let list = document.createElement('ul');
        let titre = document.createElement('h2');
        titre.innerHTML = `L'etudiant numéro ${index+1}`;
        list.innerHTML = `
            <li><strong>le nom :</strong> ${etu.nom}</li>
            <li><strong>l'age :</strong> ${etu.age}</li>
            <li><strong>la note :</strong> ${etu.note}</li>
        `;
        resultat.appendChild(titre);
        resultat.appendChild(list);
    });
    form.reset();
});