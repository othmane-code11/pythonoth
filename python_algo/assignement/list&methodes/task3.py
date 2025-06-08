friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]

print(f'"{"\", \"".join(friends[1:4])}"')
print(f'"{"\", \"".join(friends[-2:])}"')
# Needed Output
# "Ahmed", "Sayed", "Ali",
# "Ali", "Mahmoud"