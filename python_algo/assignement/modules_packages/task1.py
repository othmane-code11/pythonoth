from random import random, randint
print(f"Random Number Between 10 And 50 => {randint(10, 50)}")
def evenrandom():
    r = randint(2,10)
    if r % 2 == 0:
        return r
    else :
        return evenrandom()
print(f"Random Even Number Between 2 And 10 => {evenrandom()}")
def oddrandom():
    r = randint(2,10)
    if r % 2 != 0:
        return r
    else :
        return oddrandom()
print(f"Random Odd Number Between 1 And 9 => {oddrandom()}")