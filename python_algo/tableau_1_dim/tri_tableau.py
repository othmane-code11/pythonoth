T = [2, 3, 7, 6, 8, 5]
for i in range(5):
    indmin = i
    for j in range(i+1, 6):
        if T[j] < T[indmin]:
            indmin = j
    x = T[i]
    T[i] = T[indmin]
    T[indmin] = x
print(T)

