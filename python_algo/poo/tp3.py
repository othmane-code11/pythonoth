from abc import ABC, abstractmethod

class Paiement(ABC):
    def __init__(self, montant):
        self.montant = montant

    @abstractmethod
    def calculer_montant_final(self):
        pass

    @abstractmethod
    def __str__(self):
        pass

class CarteBancaire(Paiement):
    def calculer_montant_final(self):
        return self.montant  # Aucun frais

    def __str__(self):
        return f"Carte Bancaire - Montant: {self.montant:.2f} DHS (Sans frais)"


class VirementBancaire(Paiement):
    def calculer_montant_final(self):
        return self.montant + 10

    def __str__(self):
        return f"Virement Bancaire - Montant: {self.montant:.2f} DHS (+10 DHS de frais)"


class Cryptomonnaie(Paiement):
    def calculer_montant_final(self):
        return self.montant * 1.02

    def __str__(self):
        return f"Cryptomonnaie - Montant: {self.montant:.2f} DHS (+2% de commission)"


paiements = [
    CarteBancaire(500),
    VirementBancaire(1000),
    Cryptomonnaie(750),
    CarteBancaire(200)
]

total = 0
print("Détails des paiements :\n")

for paiement in paiements:
    print(paiement)
    total += paiement.calculer_montant_final()

print(f"\nMontant total payé : {total:.2f} DHS")