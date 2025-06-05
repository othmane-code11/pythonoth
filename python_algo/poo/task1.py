import datetime
class personne:
    def __init__(self, nom, prenom, ans):
        self.nom = nom
        self.prenom = prenom
        self.anneeNaissance = ans

    def calculerAge(self) :
        return datetime.datetime.now().year - self.anneeNaissance 

    def afficherInfo(self) :
        print(f"Bonjour je m'appelle {self.nom} et j'ai {self.calculerAge()} ans")

class Etudiant(personne): 
    def __init__(self, nom, prenom, ans, cin):
        super().__init__(nom, prenom, ans)
        self.cin = cin
    
    def afficherInfo(self):
        super().afficherInfo()
        print(f"et le cin est '{self.cin}'")

personne1 = personne("Ezzaytouni", "othmane", 2002)
Etu1 = Etudiant("Ezzaytouni", "othmane", 2002, "Etud2002")
personne1.afficherInfo()
Etu1.afficherInfo()