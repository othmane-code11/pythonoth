for i in range(1, 21):
    if (i not in [6, 8, 12]) :
        if (i < 10) :
            print(f"{str(i).zfill(2)}")
        else :
            print(str(i))
    else :
        continue
else :
    print("All Numbers Printed")