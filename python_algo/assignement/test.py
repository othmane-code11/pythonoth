word = "wwwwwoooorrrrlllddd"

def cleaning(jomla) :
    if (len(jomla) == 1) :
        return jomla
    elif jomla[0] == jomla[1]:
        return cleaning(jomla[1:])
    else :
        return jomla[0] + cleaning(jomla[1:])

print(cleaning(word))