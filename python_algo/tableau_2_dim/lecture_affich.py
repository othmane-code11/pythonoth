M = int(input('veuillez saisir le nombre de ligne: '))
N = int(input('veuillez saisir le nombre de colomne: '))
matrice = []
for i in range(M):
    ligne = []
    for j in range(N):
        ele = int(input(f'veuillez saisir l\'element [{i+1}, {j+1}] : '))
        ligne.append(ele)
    matrice.append(ligne)
for i in range(M):
    for j in range(N):
        print(f'{matrice[i][j]}', end=' ')
    print()
print(matrice)
