#Exercice 3 : Modification du contenu d'un fichier.
def modifier (file) :
    ele_nv = str(input ('entrer le nouveau contenue : '))
    with open(file, 'w') as file : 
        file.write(ele_nv)


modifier ('test.txt')







# with open(file, 'r') as file : 
#         texte = file.read()
#     ele = str(input ('entrer le contenue à modifier : '))
#     ele_nv = str(input ('entrer le contenue à modifier : '))
    
#     with open(file, 'a') as f:
#         for i in texte:
#             if i == ele:
#                 f.write(ele_nv)
#             else :
#                 f.write(i)
