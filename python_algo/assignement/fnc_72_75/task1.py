friends_map = ["AEmanS", "AAhmedS", "DSamehF", "LOsamaL"]

def remove_chars(s) :
    return s[1:-1]

cleaned_list = list(map(remove_chars, friends_map))
for i in cleaned_list:
    print(i)
print("#" * 30)
cleaned_list_lambda = list(map(lambda text: text[1:-1], friends_map))
for i in cleaned_list_lambda:
    print(i)

# Output
# "Eman"
# "Ahmed"
# "Sameh"
# "Osama"