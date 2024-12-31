n = int(input('veuillez saisir un nombre :'))
print('les diviseurs de ', n, 'sont:')
for i in range(1, n+1):
    if n % i == 0 :
        print (i)
