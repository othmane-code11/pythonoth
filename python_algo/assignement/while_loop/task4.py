myFriends = []
maxAjoute = 4

while maxAjoute != 0:
    name = input("Enter a name: ").strip()
    if (name.isupper()) :
        print("The name Is Invalid")
    elif (name.islower()) :
        myFriends.append(name.capitalize())
        maxAjoute -= 1
        print(f"Friend {name} Added => 1st Letter Become Capital")
        print(f"Names Left in List Is {maxAjoute}\n" if maxAjoute != 0 else "")
    elif (name[0] <= "Z" and name[0] >= "A"):
        myFriends.append(name.capitalize())
        maxAjoute -= 1
        print(f"Friend {name} Added")
        print(f"Names Left in List Is {maxAjoute}\n" if maxAjoute != 0 else "")
else :
    print("Filled list")
    print(myFriends)