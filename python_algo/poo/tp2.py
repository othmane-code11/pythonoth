# partie 1
class Animal:
    def __init__(self, nom, age):
        self._nom = nom
        self.__numPuce = None
        self.age = age
    
    def getNom(self):
        return self._nom

    def setNom(self, nw_nom):
        self._nom = nw_nom

    def getNumPuce(self):
        return self.__numPuce

    def setNumPuce(self, nmPuce) :
        self.__numPuce = nmPuce
    
    def afficher_infos(self):
        return f"Animal: {self._nom}, Âge: {self.age}"

class Chien(Animal):
    def __init__(self, nom, age, race):
        super().__init__(nom, age)
        self.race = race

    def afficher_infos(self):
        return f"Chien: {self.getNom()}, Âge: {self.age},  Race: {self.race}"

class Chat(Animal):
    def __init__(self, nom, age, couleur):
        super().__init__(nom, age)
        self.couleur = couleur
    
    def afficher_infos(self):
        return f"Chat: {self.getNom()}, Âge: {self.age}, Couleur: {self.couleur}"

an = Animal("singe", 12)
print (an.afficher_infos())
an.setNumPuce(1232)
print (an.getNumPuce())
chien1 = Chien("wiwi", 4, "rott")
chien2 = Chien("niw", 2, "doberman")
chat1 = Chat("mimi", 1.5, "siamo")
# print (chien1.afficher_infos())

# partie 2
class Refuge :
    def __init__(self):
        self.animaux = []
    
    def ajouterAnimal (self, animal) :
        if isinstance(animal, Animal):
            self.animaux.append(animal)
        else :
            print ("Seuls les objets de type Animal peuvent être ajoutés au refuge")
    
    def supprimerAnimal (self, nom):
        for animal in self.animaux:
            if animal.getNom() == nom:
                self.animaux.remove(animal)
                return True    
        return False

    def afficher_animaux(self):
        if len(self.animaux) != 0:
            print("Les animaux sont :")
            for animal in self.animaux:
                print(animal.afficher_infos())
        else :
            print ("Aucun animal à afficher")

    def rechercherAnimal (self, nom):
        for animal in self.animaux:
            if animal.getNom() == nom:
                print (f"l'animal avec le nom {nom} existe")
                return
        print (f"l'animal avec le nom {nom} n'existe pas")

    def __get_age(self, animal):
        return animal.age

    def trier_par_age(self):
        self.animaux.sort(key=self.__get_age)
    
    def compter_chiens_chats(self):
        chiens = chats = 0
        for animal in self.animaux:
            if isinstance(animal, Chien):
                chiens += 1
            elif isinstance(animal, Chat):
                chats += 1
        return chiens, chats

refuge = Refuge()
refuge.ajouterAnimal(chien1)
refuge.ajouterAnimal(chien2)
refuge.ajouterAnimal(chat1)
refuge.afficher_animaux()
refuge.supprimerAnimal("wiwi")
# refuge.afficher_animaux()
refuge.rechercherAnimal('wiwi')
refuge.rechercherAnimal('niw')
refuge.trier_par_age()
refuge.afficher_animaux()
nb_chien, nb_chat = refuge.compter_chiens_chats()
print(f"le nombre des chiens est : {nb_chien}")
print(f"le nombre des chats est : {nb_chat}")