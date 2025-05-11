let btnButtons = document.querySelectorAll('.theme-btn');
let body = document.body;

btnButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        let theme = btn.id.replace('btn', 'theme');
        body.className = theme;
    });
});

let sections = document.querySelectorAll('.section');
document.getElementById('showClients').addEventListener('click', () => activeClasse("clients"));
document.getElementById('showReservation').addEventListener('click', () => activeClasse("reservation"));
document.getElementById('showTickets').addEventListener('click', () => activeClasse("tickets"));

function activeClasse (sec_id) {
    sections.forEach(section => {
        section.classList.toggle('active', sec_id === section.id);
    });
}

let clientForm = document.getElementById('clientForm');
let clientsTableBody = document.querySelector('#clientsTable tbody');
let clients = [];
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomComplet = document.getElementById('nomComplet').value;
    let cin = document.getElementById('cin').value;
    let estEtudiant = document.querySelector('input[name="estEtudiant"]:checked').value === 'true';

    if (clients.some(client => client.cin === cin)) {
        alert('Le cin doit etre unique');
        return;
    }

    let newClient = {nomComplet, cin, estEtudiant};
    clients.push(newClient);
    updateClientTable();
    updateClientSelect();
});

function updateClientTable(){
    clientsTableBody.innerHTML = "";
    clients.forEach((client, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nomComplet}</td>
            <td>${client.cin}</td>
            <td>${client.estEtudiant ? 'Oui' : 'Non'}</td>
            <td><button onclick="deleteClient(${index})">Supprimer</button></td>
        `;
        clientsTableBody.appendChild(row);
    });
}

function deleteClient(index) {
    if (confirm ("are you sure?")) {
        clients.splice(index, 1);
        updateClientTable();
        updateClientSelect();
    }
}

let clientSelect = document.getElementById('clientSelect');
function updateClientSelect() {
    clientSelect.innerHTML = "";
    clients.forEach((client, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${client.nomComplet} (${client.cin})`;
        clientSelect.appendChild(opt);
    });
}

let reservationForm = document.getElementById('reservationForm');
let ticketsTable = document.querySelector('#ticketsTable tbody');

reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let clientIndex = document.getElementById('clientSelect').selectedIndex;
    let destination = document.getElementById('destination').value;
    let classe = document.querySelector('input[name="classe"]:checked').value;
    let estEtudiant = clients[clientIndex].estEtudiant;

    let prices = {
        rabat:40,
        mohammedia:20,
        marrakech:150,
        tanger:290
    }

    let prix = prices[destination] * (estEtudiant ? 0.7 : 1) * (classe === "1" ? 1.5 : 1);
    document.getElementById('totalPrice').textContent = `le prix total est : ${prix}DH`;
    let d = new Date;
    let dFormat = [d.getDate(), d.getMonth()+1, d.getFullYear()].join("/") + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

    let tickets = {
        client : clients[clientIndex],
        destination,
        classe,
        date:dFormat,
        prix
    }
    updateClientTickets(tickets);
});

function updateClientTickets(tickets) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${tickets.client.nomComplet} (${tickets.client.cin.slice(0, 4)}...)</td>
        <td>${tickets.client.estEtudiant ? 'Oui' : 'Non'}</td>
        <td>${tickets.destination}</td>
        <td>${tickets.classe === '1' ? '1ere' : '2eme'}</td>
        <td>${tickets.prix} DH</td>
        <td>${tickets.date}</td>
    `;
    ticketsTable.appendChild(row);
}






