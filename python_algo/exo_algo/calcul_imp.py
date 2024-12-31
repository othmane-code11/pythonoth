i = int(input('veuillez saisir le salaire :'))
if i < 20000 :
    print("l'impot est : 0")
elif i < 40000 and i > 20000 :
    print("l'impot est :", i * 0.1)
else:
    print("l'impot est :", i * 0.2)