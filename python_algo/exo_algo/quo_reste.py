i = int(input('veuillez saisir un numerateur: '))
j = int(input('veuillez saisir un Dénomenateur: '))
if j != 0:
    reste = int(i % j)
    quo = i / j
    print('le quotient de ', i, 'sur', j, 'est', quo, 'et le reste est', reste)
else:
    print('la division sur 0 est impossible')

