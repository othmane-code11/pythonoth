taille = int(input('veuillez saisir la taille du tableau: '))
tab = []
for i in range(taille):
    ele = int(input(f'veuillez saisir la valeur de l\'élément {i+1} : '))
    tab.append(ele)
moy = 0
som = 0

for i in range(taille):
    som += tab[i]
if taille != 0:
    moy = som / taille
print('la moyenne de tous les éléments du tableau est : ', moy)
