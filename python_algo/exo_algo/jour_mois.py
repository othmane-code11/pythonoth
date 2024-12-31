i = int(input('veuillez saisir le numéro du mois :'))
if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12 :
    print('le nombre de jour du mois', i, 'est: 31 jours')
elif i == 2 :
    print('le nombre de jour du mois', i, 'est: 28 jours ou 29 jours')
else: 
    print('le nombre de jour du mois', i, 'est: 30 jours')