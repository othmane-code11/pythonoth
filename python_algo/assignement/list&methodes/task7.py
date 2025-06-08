friends = ["Ahmed", "Sayed"]
employees = ["Samah", "Eman"]
school = ["Ramy", "Shady"]

friends.extend(employees)
friends.extend(school)
print(friends)
# Needed Output
# ["Ahmed", "Sayed", "Samah", "Eman", "Ramy", "Shady"]