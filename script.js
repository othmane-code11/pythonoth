window.addEventListener('load', () => { 
    if (localStorage.getItem("clients")) {
        clients = JSON.parse(localStorage.getItem('clients'));
        updateTable();
    }
});

function sauvgarder() {
    localStorage.setItem('clients', JSON.stringify("clients"));
}


let clients = [];
let modifyMode = false;
let indexModify = null;

let form = document.getElementById('form-container');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let id = (modifyMode) ? clients[indexModify].id : generated();
    let isValid = true;
    let errors = document.querySelectorAll('.errors');
    errors.forEach(err => {
        err.textContent = "";
    });

    let regex = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9])*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9])*\.[a-zA-Z0-9]{2,6}$/;
    if (!regex.test(email)) {
        document.getElementById('email_error').textContent = "L'email invalid";
        isValid = false;
    } else if (clients.some(client => client.email === email) && !modifyMode) {
        document.getElementById('email_error').textContent = "L'email doit etre unique";
        isValid = false;
    }

    if (nom.trim() === "") {
        document.getElementById('nom_error').textContent = "L'email est vide";
        isValid = false;
    }
    if (!isValid) {
        return;
    }

    let client = {id, nom, email};
    if (modifyMode) {
        clients[indexModify] = client;
        indexModify = null;
        modifyMode = false;
        document.getElementById('sbmbtn').textContent = "Ajouter Contact";
    } else {
        clients.push(client);
    }
    updateTable();
    // sauvgarder();
    form.reset();
});

function generated() {
    return Math.floor(Math.random() * 100);
}

let tbody = document.getElementById('contact-table-body');
function updateTable() {
    tbody.innerHTML = "";
    clients.forEach((client, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.nom}</td>
            <td>${client.email}</td>
            <td>
                <button onclick="deleteClient(${index})">Supprimer</button>
                <button onclick="modifyClient(${index})">Modifier</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteClient(index) {
    if (confirm("Etez vous sure?")) {
        clients.splice(index, 1);
        updateTable();
        sauvgarder();
    }
}

function modifyClient(index) {
    let client = clients[index];
    indexModify = index;
    modifyMode = true;
    document.getElementById('nom').value = client.nom;
    document.getElementById('email').value = client.email;
    document.getElementById('sbmbtn').textContent = "Modifier contact";
}