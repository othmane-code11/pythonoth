M = int(input('veuillez saisir le nombre de ligne: '))
N = int(input('veuillez saisir le nombre de colomne: '))
matrice = []
for i in range(M):
    ligne = []
    for j in range(N):
        ele = int(input(f'veuillez saisir l\'element [{i+1}, {j+1}] : '))
        ligne.append(ele)
    matrice.append(ligne)
mininum = matrice[0][0]
maximum = matrice[0][0]
for k in range(M):
    for l in range(N):
        if mininum > matrice[k][l] :
            mininum = matrice[k][l]
        if maximum < matrice[k][l] :
            maximum = matrice[k][l]
print('le maximum est :', maximum, 'et le minimum est :', mininum)