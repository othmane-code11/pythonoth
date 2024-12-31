M = int(input('veuillez saisir le nombre de ligne: '))
N = int(input('veuillez saisir le nombre de colomne: '))
matrice = []
for i in range(M):
    ligne = []
    for j in range(N):
        ele = int(input(f'veuillez saisir l\'element [{i+1}, {j+1}] : '))
        ligne.append(ele)
    matrice.append(ligne)
# le transposée de la matrice consiste à échanger ses lignes et ses colonne
new_matrice = []
for i in range(N):
    new_ligne = []
    for j in range(M):
        new_ligne.append(matrice[j][i])
    new_matrice.append(new_ligne)
print(matrice)
print(new_matrice)
for i in range(M):
    for j in range(N):
        print(f'{matrice[i][j]}', end=' ')
    print()
print('la matrice transposee :')
for i in range(N):
    for j in range(M):
        print(f'{new_matrice[i][j]}', end=' ')
    print()