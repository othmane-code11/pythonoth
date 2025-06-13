num = int(input("Enter a number : "))
i = 0
if (num > 0) :
    while (num > 0) :
        if (num == 6) :
            num -= 1
            continue
        print(num)
        i += 1
        num -= 1
    else :
        print(f"{i} Numbers Printed successfuly.")
else :
    print("number is not larger than 0")
