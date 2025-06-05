let btnthemes = document.querySelectorAll('.theme-btn');
let body = document.body;

btnthemes.forEach(btn => {
    btn.addEventListener('click', () => {
        let theme = btn.id.replace('btn', 'theme');
        body.className = theme;
    });
});

let sections = document.querySelectorAll('.section');
function activeClasse(secId) {
    sections.forEach(section => {
        section.classList.toggle('active', section.id === secId);
    });
}
document.getElementById('showClients').addEventListener('click', () => activeClasse('clients'));
document.getElementById('showReservation').addEventListener('click', () => activeClasse('reservation'));
document.getElementById('showTickets').addEventListener('click', () => activeClasse('tickets'));

let clientForm = document.getElementById('clientForm');
let clientsTable = document.querySelector('#clientsTable tbody');
let clients = [];

clientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomComplet = document.getElementById('nomComplet').value;
    let cin = document.getElementById('cin').value;
    let estEtudiant = document.querySelector('input[name="estEtudiant"]:checked').value === 'true';

    if (clients.some(client => client.cin === cin)) {
        alert('la cin doit etre unique');
        return ;
    }
    let newClient = {nomComplet, cin, estEtudiant};

    clients.push(newClient);
    updateClientTable();
    updateClientSelect();
});

function updateClientTable(){
    clientsTable.innerHTML = "";
    clients.forEach ((client, index) => {
        let row =  document.createElement('tr');
        row.innerHTML = `
            <td>${client.nomComplet}</td>
            <td>${client.cin}</td>
            <td>${client.estEtudiant ? "Oui" : "Non"}</td>
            <td><button onclick="deleteClient(${index})">Supprimer</button></td>
        `;
        clientsTable.appendChild(row);
    });
}

function deleteClient(index) {
    if (confirm('are you sure?')) {
        clients.splice(index, 1);
        updateClientTable();
        updateClientSelect();
    }
}

let clientSelect = document.getElementById('clientSelect');
function updateClientSelect(){
    clientSelect.innerHTML = "";
    clients.forEach((client, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${client.nomComplet} (${client.cin})`;
        clientSelect.appendChild(opt);
    });
}
let allTickets = [];

let reservationForm = document.getElementById('reservationForm');
let ticketsTable = document.querySelector('#ticketsTable tbody');
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let clientIndex = document.getElementById('clientSelect').selectedIndex;
    let destination = document.getElementById('destination').value;
    let classe = document.querySelector('input[name="classe"]:checked').value;
    let estEtudiant = clients[clientIndex].estEtudiant;

    let prices = {
        rabat : 40,
        mohammedia : 20,
        marrakech : 150, 
        tanger : 290
    };

    let prix = prices[destination] * (estEtudiant ? 0.7 : 1) * (classe === '1' ? 1.5 : 1);
    document.getElementById('totalPrice').textContent = `Le prix total est : ${prix}DH`;
    let d = new Date;
    let dformat = [d.getDate(), d.getMonth()+1, d.getFullYear()].join('/') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

    let tickets = {
        client : clients[clientIndex],
        destination,
        classe,
        prix,
        dformat
    };
    allTickets.push(tickets);
    updateClienttickets();
});



function updateClienttickets() {
    ticketsTable.innerHTML = "";
    allTickets.forEach((ticket, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.client.nomComplet}</td>
            <td>${ticket.client.estEtudiant ? "Oui" : "Non"}</td>
            <td>${ticket.destination}</td>
            <td>${ticket.classe === "1" ? "1ere" : "2eme"}</td>
            <td>${ticket.prix}</td>
            <td>${ticket.dformat}</td>
            <td><button onclick="deleteticket(${index})">Supprimer</button></td>
        `;
        ticketsTable.appendChild(row);
    });
}

function deleteticket(index) {
    if (confirm("are you sure?")) {
        allTickets.splice(index, 1);
        updateClienttickets();
    }
}