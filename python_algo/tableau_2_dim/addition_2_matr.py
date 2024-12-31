M = int(input('veuillez saisir le nombre de ligne: '))
N = int(input('veuillez saisir le nombre de colomne: '))
matrice = []
for i in range(M):
    ligne = []
    for j in range(N):
        ele = int(input(f'veuillez saisir l\'element [{i+1}, {j+1}] : '))
        ligne.append(ele)
    matrice.append(ligne)

print('passant a la deuxième matrice')
matrice_2 = []
for k in range(M):
    ligne = []
    for l in range(N):
        ele = int(input(f'veuillez saisir l\'element [{k+1}, {l+1}] : '))
        ligne.append(ele)
    matrice_2.append(ligne)

matrice_finale = []
for i in range(M):
    ligne = []
    for j in range(N):
        ligne.append(matrice[i][j] + matrice_2[i][j])
    matrice_finale.append(ligne)
print('la matrice 1 est :')
print(matrice)
print('la matrice 2 est :')
print(matrice_2)
print('la matrice final est :')
print(matrice_finale)


