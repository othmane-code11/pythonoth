N = int(input('veuillez saisir le nombre de ligne et de colomne: '))
matrice = []
for i in range(N):
    ligne = []
    for j in range(N):
        ele = int(input(f'veuillez saisir l\'element [{i+1}, {j+1}] : '))
        ligne.append(ele)
    matrice.append(ligne)

sym = True
for k in range(N):
    for l in range(N):
        if matrice[k][l] != matrice[l][k] :
            sym = False
            break
    
if (sym == True) :
    print('la matrice est symetrique')
else:
    print('la matrice n\'est pas symetrique')

for i in range(N):
    for j in range(N):
        print(f'{matrice[i][j]}', end=' ')
    print()