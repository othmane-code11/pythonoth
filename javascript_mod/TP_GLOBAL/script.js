
// La Gestion des Thèmes Dynamiques
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.id.replace('-btn', '-theme');
    body.className = theme;
  });
});

// Classe avtive
const sections = document.querySelectorAll('.section');
function activeClasse (sectionId) { // sectionId => id du section
  sections.forEach(section => {
    section.classList.toggle('active', section.id === sectionId);
  })
}
document.getElementById("showClients").addEventListener("click", () => activeClasse("clients"));
document.getElementById("showReservation").addEventListener("click", () => activeClasse("reservation"));
document.getElementById("showTickets").addEventListener("click", () => activeClasse("tickets"));

// Gestion des Clients
const clientForm = document.getElementById('clientForm');
const clientsTableBody = document.querySelector('#clientsTable tbody');
const clients = [];

clientForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomComplet = document.getElementById('nomComplet').value;
  const cin = document.getElementById('cin').value;
  const estEtudiant = document.querySelector('input[name="estEtudiant"]:checked').value === 'true';

  // La Vérification du CIN unique
  if (clients.some(client => client.cin === cin)) { //The Array.some() method checks if any of the elements in an array pass a test and return booleen
    alert('Le CIN doit être unique.');
    return;
  }

  // Ajouter le client
  const newClient = {
    nomComplet,
    cin, 
    estEtudiant
  };
  clients.push(newClient);
  updateClientsTable();
  updateClientsSelect();

  // Réinitialiser le formulaire
  clientForm.reset();
});

function updateClientsTable() {
  clientsTableBody.innerHTML = '';
  clients.forEach((client, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${client.nomComplet}</td>
      <td>${client.cin}</td>
      <td>${(client.estEtudiant) ? 'Oui' : 'Non'}</td>
      <td><button onclick="deleteClient(${index})">Supprimer</button></td>
    `;
    clientsTableBody.appendChild(row);
  });
}

function deleteClient(index) {
  if (confirm('Etes-vous sur ?')) {
    clients.splice(index, 1);
    updateClientsTable();
    updateClientsSelect();
  }
}
// Remplir les section de reservation
const clientSelects = document.getElementById('clientSelect');
function updateClientsSelect() {
  clientSelects.innerHTML = '';
  clients.forEach((client, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.textContent = `${client.nomComplet} (${client.cin})`;
    clientSelects.appendChild(opt);
  });
}

// Gestion des Reservations
const reservationForm = document.getElementById('reservationForm');
const ticketsTableBody = document.querySelector('#ticketsTable tbody');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const clientIndex = document.getElementById('clientSelect').selectedIndex; //The selectedIndex property sets or returns the index of the selected option in a drop-down list
  const destination = document.getElementById('destination').value;
  const classe = document.querySelector('input[name="classe"]:checked').value;
  const estEtudiant = clients[clientIndex].estEtudiant;

  const prixBase = {
    rabat: 40,
    mohammedia: 20,
    marrakech: 150,
    tanger: 290
  };

  const prixB = prixBase[destination];
  const prix = prixB * (classe === '1' ? 1.5 : 1) * (estEtudiant ? 0.7 : 1);

  // Remplir le span de totalPrice
  document.getElementById('totalPrice').textContent = `${prix.toFixed(2)} DH😊`

  // Ajouter le ticket
  let d = new Date;
  let dformat = [String(d.getDate()).padStart(2, 0), String(d.getMonth()+1).padStart(2, 0), d.getFullYear()].join('/')+' '+
                [String(d.getHours()).padStart(2, 0), String(d.getMinutes()).padStart(2, 0), String(d.getSeconds()).padStart(2, 0)].join(':');
  const ticket = {
    client: clients[clientIndex],
    destination,
    classe,
    prix: prix.toFixed(2),
    date: dformat
  };
  updateTicketsTable(ticket);
});

function updateTicketsTable(ticket) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${ticket.client.nomComplet} (${ticket.client.cin.slice(0, 3)}...)</td>
    <td>${ticket.client.estEtudiant ? 'Oui' : 'Non'}</td>
    <td>${ticket.destination}</td>
    <td>${ticket.classe}ère classe</td>
    <td>${ticket.prix} DH</td>
    <td>${ticket.date}</td>
  `;
  ticketsTableBody.appendChild(row);
}
