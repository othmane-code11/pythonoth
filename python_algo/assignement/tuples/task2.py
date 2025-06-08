friends = ("Osama", "Ahmed", "Sayed")
ls = list(friends)
ls[0] = "Elzero"
fr = tuple(ls)
print(fr)
print(type(fr))
print(f"{len(fr)} Elements")
# Needed Output
# ("Elzero", "Ahmed", "Sayed")
# <class 'tuple'>
# 3 Elements