let btnthemes = document.querySelectorAll('.theme-btn');
let body = document.body;

btnthemes.forEach(btn => {
    btn.addEventListener('click', () => {
        let theme = btn.id.replace('btn', 'theme');
        body.className = theme;
    })
})

let sections = document.querySelectorAll('.section');
document.getElementById('showClients').addEventListener('click', () => activeClasse("clients"));
document.getElementById('showReservation').addEventListener('click', () => activeClasse("reservation"));
document.getElementById('showTickets').addEventListener('click', () => activeClasse("tickets"));

function activeClasse(sec_id) {
    sections.forEach(section => {
        section.classList.toggle('active', sec_id === section.id);
    });
}

let clientForm = document.getElementById('clientForm');
let clientsTablebody = document.querySelector('#clientsTable tbody');
let clients = [];

clientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomComplet = document.getElementById('nomComplet').value;
    let cin = document.getElementById('cin').value;
    let estEtudiant = document.querySelector('input[name="estEtudiant"]:checked').value === "true";

    if (clients.some(client => client.cin === cin)) {
        alert("Le cin doit etre unique!");
        return;
    }

    let newClient = {nomComplet, cin, estEtudiant};
    clients.push(newClient);
    updateclientTable();
    updateselectTable();
    clientForm.reset();
});

function updateclientTable(){
    clientsTablebody.innerHTML = "";
    clients.forEach((client, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nomComplet}</td>
            <td>${client.cin}</td>
            <td>${client.estEtudiant ? "Oui" : "Non"}</td>
            <td><button onclick="deleteClient(${index})">Supprimer</button></td>
        `;
        clientsTablebody.appendChild(row);
    });
}
let clientSelect = document.getElementById('clientSelect');
function updateselectTable() {
    clientSelect.innerHTML = "";
    clients.forEach((client, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${client.nomComplet} (${client.cin})`;
        clientSelect.appendChild(opt);
    });
}

function deleteClient(index) {
    if (confirm("etes vous sur?")) {
        clients.splice(index, 1);
        updateclientTable();
        updateselectTable();
    }
}

let reservation = document.getElementById('reservationForm');
let ticketsTabletbody = document.querySelector('#ticketsTable tbody');

reservation.addEventListener('submit', (e) => {
    e.preventDefault();
    let clientIndex = document.getElementById('clientSelect').selectedIndex;
    let destination = document.getElementById('destination').value;
    let classe = document.querySelector('input[name="classe"]:checked').value;
    let estEtudiant = clients[clientIndex].estEtudiant;

    let tickets = {
        rabat:40,
        mohammedia:20,
        marrakech:150,
        tanger:290
    };
    let prix = tickets[destination] * (estEtudiant ? 0.7 : 1) * (classe === "1" ? 1.5 : 1);
    document.getElementById('totalPrice').textContent = `le prix total ${prix.toFixed(2)}DH`;

    let d = new Date;
    let dformat = [d.getDate(), d.getMonth()+1, d.getFullYear()].join("/") + " " + [ d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

    let ticket = {
        client : clients[clientIndex],
        destination, 
        classe,
        price : prix.toFixed(2),
        date:dformat
    }

    updateticketTable(ticket);
});


function updateticketTable(ticket) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${ticket.client.nomComplet} (${ticket.client.cin.slice(0, 3)}...)</td>
        <td>${ticket.client.estEtudiant ? 'Oui' : "Non"}</td>
        <td>${ticket.destination}</td>
        <td>${ticket.classe ? '1 ere' : '2 eme'}</td>
        <td>${ticket.price}</td>
        <td>${ticket.date}</td>
    `;
    ticketsTabletbody.appendChild(row);
}
    