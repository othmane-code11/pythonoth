// Récuperer et styker les élements HTML
const boite = document.getElementById('boite');
boite.style.background = "lightgray"
boite.style.textAlign = "center";
boite.style.padding = "40px 20px";
boite.style.margin = "20px";

const changeButton = document.getElementById('changeButton');
changeButton.style.display = "block";
changeButton.style.margin = "20px 42%";
changeButton.style.textAlign = "center";
changeButton.style.padding = "10px 20px";
changeButton.style.fontSize = "16px";
changeButton.style.cursor = "pointer";

// Ajouter un evenement de click au bouton
changeButton.addEventListener('click', () => {
    boite.classList.toggle('active'); // toggle ajoute la classe s'il n'existe pas && si la classe existe déja elle la supprime
    styler();
});
function styler() {
    let activeEle = document.getElementsByClassName('active')[0]; // accède au premier élément avec la classe active
    if (activeEle) {
        activeEle.style.color = 'green';
        activeEle.style.border = "2px solid blue";
    }
    else {
        boite.style.color = '';
        boite.style.border = "";
    }
}