taille = int(input('veuillez saisir la taille du tableau: '))
tab = []
for i in range(taille):
    ele = int(input(f'veuillez saisir la valeur de l\'élément {i+1} : '))
    tab.append(ele)

print('les éléments pairs du tableau sont :')
for i in range(taille):
    if tab[i] % 2 == 0 :
        print(tab[i], end=' ')
