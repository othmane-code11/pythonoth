const tarifs = {
    'Safi': 90,
    'Marrakech': 120,
    'Mohammédia': 20,
    'Rabat': 60
};

function validerForm() {
    const nom = document.getElementById('nom').value.trim();
    const nbPassagers = parseInt(document.getElementById('nbPassagers').value);

    if (!nom) {
        alert('Le champ "Nom" est obligatoire.');
        return false;
    }

    if (nbPassagers <= 0 || !nbPassagers) {
        alert('Le nombre de passagers doit être strictement positif.');
        return false;
    }

    alert('Formulaire validé avec succès.');
    return true;
}

function calculer() {
    const villeArrivee = document.getElementById('villeArrivee').value; // Récupérer la ville d'arrivée
    const classe = document.querySelector('input[name="classe"]:checked').value;
    const nbPassagers = parseInt(document.getElementById('nbPassagers').value);

    if (!validerForm()) return;

    let tarif = parseInt(tarifs[villeArrivee]);
    if (classe === '1ere') {
        tarif *= 2;
    }

    const total = tarif * nbPassagers;
    alert(`Le total de votre réservation est de ${parseInt(total)} Dhs.`);
    let totalPrix = document.getElementById("prixTotal");
    totalPrix.innerHTML = `le prix total est : ${total} dhs`;
}

function Recapitulatif() {
    const nom = document.getElementById('nom').value.trim();
    const villeArrivee = document.getElementById('villeArrivee').value;
    const classe = document.querySelector('input[name="classe"]:checked').value;
    const nbPassagers = parseInt(document.getElementById('nbPassagers').value);
    const modePaiement = document.getElementById('modePaiement').value;

    if (!validerForm()) return;

    let tarif = tarifs[villeArrivee];
    if (classe === '1ere') {
        tarif *= 2;
    }
    const total = tarif * nbPassagers;

    const recapDiv = document.getElementById('recapitulatif');
    recapDiv.innerHTML = `
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Ville de départ:</strong> Casablanca</p>
        <p><strong>Ville d'arrivée:</strong> ${villeArrivee}</p>
        <p><strong>Classe:</strong> ${classe}</p>
        <p><strong>Nombre de passagers:</strong> ${nbPassagers}</p>
        <p><strong>Mode de paiement:</strong> ${modePaiement}</p>
        <p><strong>Total:</strong> ${total} Dhs</p>
    `;
}
