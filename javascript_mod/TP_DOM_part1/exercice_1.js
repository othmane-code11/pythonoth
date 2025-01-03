let body = document.querySelector('body');
body.style.backgroundColor = '#f4f4f4'
body.style.margin = 0;
//header
let header = document.createElement('header');
header.innerHTML = `
    <a href="">Mon Logo</a>
    <nav>
        <a href="" style="margin: 0 70px;">Accueil</a>
        <a href="" style="margin: 0 70px;">À propos</a>
        <a href="" style="margin: 0 70px;">Contact</a>
    </nav>
`;
header.style.backgroundColor = '#A9A9A9';
header.style.color = 'white';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.padding = '15px';
document.body.appendChild(header);

//la section Hero
let hero = document.createElement('section');
hero.innerHTML = `
    <h1>Bienvenue sur mon site</h1>
    <p>Découvrez nos services exceptionnels</p>
    <button style="padding: 10px 20px; background-color: #A9A9A9; border: none; border-radius: 5px;">En savoir plus</button>
`;
hero.style.textAlign = 'center';
hero.style.padding = '60px';
hero.style.marginTop = '100px'
document.body.appendChild(hero); // ajouter la partie dyal hero à lbody
