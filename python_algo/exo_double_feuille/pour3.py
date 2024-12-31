n = int(input('veuillez saisir un nombre :'))
somme = 0
for i in range(n+1):
    if i % 2 != 0:
        somme = somme + i
print('la somme des nombres impaires de 1 à ', n, 'est:', somme)