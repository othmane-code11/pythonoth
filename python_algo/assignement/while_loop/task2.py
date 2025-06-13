# Input
friends = ["Mohamed", "Shady", "ahmed", "eman", "Sherif"]
i = 0
ign = 0
while i < len(friends):
    if (friends[i][0] <= "z" and friends[i][0] >= "a") :
        i += 1
        ign += 1
        continue
    else :
        print (friends[i])
        i += 1
print (f"Friends Printed And Ignored Names Count Is {i}")
# Needed Output
# "Mohamed"
# "Shady"
# "Sherif"
# "Friends Printed And Ignored Names Count Is 2"