friends = ["Nasser", "Osama", "Ahmed", "Sayed", "Salem"]

friends[:2] = []
print(friends)
friends.pop()
print(friends)

# Needed Output
# ["Ahmed", "Sayed", "Salem"]
# ["Ahmed", "Sayed"]