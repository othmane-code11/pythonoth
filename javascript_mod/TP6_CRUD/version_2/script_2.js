let clients = [];
let modifierMode = false;
let indexMode = null;

function genererId() {
    return Date.now() * Math.floor(Math.random()*1000);
}
document.getElementById('form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let id = modifierMode ? clients[indexMode].id : genererId();
    
    let messages = document.querySelectorAll('.errors')
    messages.forEach(msg => {
        msg.textContent = '';
    });

    let estValid = true;
    if (nom.trim() === '') {
        document.getElementById('nom_error').textContent = 'le champ nom est obligatoire';
        estValid = false;
    }
    let regexEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9])*@[A-Za-z0-9]+\.[A-Za-z0-9]{2,4}$/;
    if (!regexEmail.test(email)) {
        document.getElementById('email_error').textContent = 'le champ email est obligatoire';
        estValid = false;
    }
    else if (clients.some(client => client.email === email) && !modifierMode) {
        document.getElementById('email_error').textContent = 'le champ email doit etre unique';
        estValid = false;
    }

    if (clients.some(client => client.id === id) && !modifierMode) {
        estValid = false;
        alert('id doit etre unique');
    }

    if (!estValid) {
        return false;
    }

    let client = {
        nom, 
        email, 
        id
    };

    if (modifierMode) {
        clients[indexMode] = client;
        document.getElementById('sbmbtn').textContent = 'Ajouter Contact';
        modifierMode = false;
        indexMode = null;
    }
    else {
        clients.push(client);
    }
    updateTable();
    document.getElementById('form-container').reset();
});

function updateTable() {
    let tbody = document.getElementById('contact-table-body');
    tbody.innerHTML = '';

    clients.forEach((client, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.nom}</td>
            <td>${client.email}</td>
            <td>
                <button onclick="supprimerClient(${client.id})">Supprimer</button>
                <button onclick="modifierClient(${index}, ${client.id})">Modifier</button>
            </td>
        `
        tbody.appendChild(row);
    });
}
function supprimerClient(id) {
    if (confirm('are you sure?')) {
        const index = clients.findIndex(c => c.id === id); 
        if (index !== -1) {
            clients.splice(index, 1);
            updateTable();
        }
        //  I can do just 
        //  function supprimerClient(index)
        //  clients.splice(index, 1);
        //  updateTable();

    }
}

function modifierClient(index, id) {
    let client = clients[index];
    document.getElementById('nom').value = client.nom;
    document.getElementById('email').value = client.email;
    // client.id = client.id;
    modifierMode = true;
    indexMode = index;
    document.getElementById('sbmbtn').textContent = 'Modifier Contact';
}
