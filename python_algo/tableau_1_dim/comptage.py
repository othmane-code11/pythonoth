taille = int(input('veuillez saisir la taille du tableau: '))
tab = []
for i in range(taille):
    ele = int(input(f'veuillez saisir la valeur de l\'élément {i+1} : '))
    tab.append(ele)
ele_chercher = int(input('veuillez saisir l\'élément à chercher : '))
compteur = 0
for i in range(taille):
    if ele_chercher == tab[i]:
        compteur += 1
print('le nombre d\'occurrence de ', ele_chercher, 'est : ', compteur)