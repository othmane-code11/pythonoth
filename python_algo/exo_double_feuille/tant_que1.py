n = int(input('veuillez saisir un nombre :'))
cmp = 0
i = n
while n >= 1:
    n = int(n / 10)
    cmp += 1
print('le nombre de chiffres de', i, 'est:', cmp)