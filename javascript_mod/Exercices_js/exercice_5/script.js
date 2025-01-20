const bttn = document.createElement('button');
bttn.textContent = "Cliquez-moi";
bttn.style.padding = "10px 20px";
bttn.style.fontSize = "16px";
bttn.style.cursor = "pointer";
document.body.appendChild(bttn);

bttn.onclick = () => { 
    alert("Bouton cliqué !");
    bttn.textContent = "Merci d'avoir cliqué !";
}