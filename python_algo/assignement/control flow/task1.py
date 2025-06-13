num1 = int(input("Enter num 1: "))
num2 = int(input("Enter num 2: "))
op = input("Enter ur operateur : ")
if (op == "+") :
    print (f"{num1} + {num2} = {num1 + num2}")
elif (op == "-") :
    print (f"{num1} - {num2} = {num1 - num2}")
elif (op == "*") :
    print (f"{num1} * {num2} = {num1 * num2}")
elif (op == "/"):
    if (num2 != 0) :
        print (f"{num1} / {num2} = {num1 / num2}")
    else :
        print ("Division by zero impossible")
elif (op == "%") :
    print (f"{num1} % {num2} = {num1 % num2}")
else :
    print("wrong operator")