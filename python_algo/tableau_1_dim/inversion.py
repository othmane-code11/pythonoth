taille = int(input('veuillez saisir la taille du tableau: '))
tab = []
for i in range(taille):
    ele = int(input(f'veuillez saisir la valeur de l\'élément {i+1} : '))
    tab.append(ele)

print('le tableau inversé :')
for i in range(int(taille/2)):
    j = taille - i - 1
    x = tab[i]
    tab[i] = tab[j]
    tab[j] = x
print(tab)