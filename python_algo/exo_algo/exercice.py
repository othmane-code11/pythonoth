numbers = [1, 2, 3, 2, 3, 2, 4, 3, 5, 7, 8, 3, 8, 1, 3, 1, 9, 8, 6, 1, 2, 8, 3, 8, 2, 4, 6, 1 ,2 ,6 ,9, 1, 2]
nn = []
for num in numbers:
    if num in nn :
        continue
    else :
        nn.append(num)
nn.sort()
print (nn)

name = "iiiisssslaaaamm"
setname = list(set(name))
print(setname)
for s in range(len(setname)):
    print(setname[s], end=", " if s != len(setname)-1 else "")