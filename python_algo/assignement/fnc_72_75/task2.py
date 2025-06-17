friends_filter = ["Osama", "Wessam", "Amal", "Essam", "Gamal", "Othman"]
def get_names(text) :
    return text[-1] == "m"

names = list(filter(get_names, friends_filter))
for n in names:
    print(n)
# Output
# "Wessam"
# "Essam"