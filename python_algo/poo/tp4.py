from datetime import datetime, timedelta
from collections import deque

class Livre:
    def __init__(self, titre, auteur, isbn):
        self.titre = titre
        self.auteur = auteur
        self.isbn = isbn
        self.date_ajout = datetime.now()
        self.disponible = True
        self.nb_emprunts = 0

    def afficher_info(self):
        statut = "Disponible" if self.disponible else "Indisponible"
        print(f"{self.titre} par {self.auteur} | ISBN: {self.isbn} | {statut} | Emprunts: {self.nb_emprunts}")

    def emprunter(self):
        self.disponible = False
        self.nb_emprunts += 1

    def retourner(self):
        self.disponible = True