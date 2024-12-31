# Exercice 1 : Manipulation simple pour lire et écrire dans des fichiers.
def coper_coller(file, file1):
    with open (file, 'r') as f:
        texte = f.read()
    with open (file1, 'w') as f:
        f.write(texte)
    
    
coper_coller('test.txt', 'test1.txt')