# Exercice 2 : Analyse d'un fichier texte pour compter des éléments.
def compter(file, ele) :
    cmp = 0
    with open(file, 'r') as file : 
        texte = file.read()
    for i in texte :
        if i == ele:
            cmp += 1
    return cmp

print(compter('test.txt', 'i'))