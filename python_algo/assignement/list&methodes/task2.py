friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]

print(f'"{"\", \"".join(friends[::2])}"')
print(f'"{"\", \"".join(friends[1::2])}"')
# Needed Output
# "Osama", "Sayed", "Mahmoud"
# "Ahmed", "Ali"