taille = int(input('veuillez saisir la taille du tableau: '))
tab = []
for i in range(taille):
    ele = int(input(f'veuillez saisir la valeur de l\'élément {i+1} : '))
    tab.append(ele)
ele_supp = int(input('veuillez saisir l\'élément à supprimer : '))
new = []
for i in range(taille):
    if ele_supp != tab[i]:
        new.append(tab[i])
print (new)