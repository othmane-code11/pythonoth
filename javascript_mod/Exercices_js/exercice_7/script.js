let resultat = document.getElementById('resultat');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    resultat.classList.toggle('active');
    if (resultat.getAttribute('class') === 'active') {
        button.textContent = 'Cliquez pour desactiver la classe';
    }
    else {
        button.textContent = 'Cliquez pour activer la classe';
    }
});