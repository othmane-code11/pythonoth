n = int(input('veuillez saisir un nombre :'))
somme = 0
for i in range(n+1):
    somme += i * i * i
print('la somme des nombres de 1 à ', n, 'est:', somme)