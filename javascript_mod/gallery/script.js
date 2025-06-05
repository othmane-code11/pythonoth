let names = ['othmane','ahmed','ali','gamal','abdelrahman'];
let ages= ['22 years old','18 years old','17 years old','22 years old','20 years old'];

let container = document.createElement('div');
document.body.appendChild(container);
function ajouter (name, age) {
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.src = 'Logo_ofppt.webp';
    title.textContent = `${name}`;
    p.textContent = `${age}`;
    card.appendChild(title);
    card.appendChild(p);
    card.appendChild(img);
    card.style.color = "white";
    card.style.backgroundColor = "grey";
    card.style.padding = "10px";
    card.style.margin = "2px";
    container.style.textAlign = "center";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.appendChild(card);
};
for (let i = 0; i < names.length; i++) {
    ajouter (names[i], ages[i]);
}
