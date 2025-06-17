def my_all(l) :
    f = True
    for i in l:
        if bool(i) == False:
            f = False
    return f

# my_all
print(my_all([1, 2, 3])) # True
print(my_all([1, 2, 3, []])) # False

def my_any(l) :
    f = False
    for i in l:
        if bool(i) == True:
            f = True
    return f
# my_any
print(my_any([0, 1, [], False])) # True
print(my_any([(), 0, False])) # False

def my_min(l) :
    m = l[0]
    for i in l:
        if (i < m):
            m = i
    return m,

# my_min
print(my_min([10, 100, -20, -100, 50])) # -100
print(my_min((10, 100, -20, -100, 50))) # -100

def my_max(l) :
    m = l[0]
    for i in l:
        if (i > m):
            m = i
    return m,
# my_max
print(my_max([10, 100, -20, -100, 50, 700])) # 700
print(my_max((10, 100, -20, -100, 50, 700))) # 700