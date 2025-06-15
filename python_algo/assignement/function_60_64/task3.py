scores_list = {
    "Math" : 90,
    "Science" : 80,
    "Language" : 70
}
def get_the_scores (name="", **kw) :
    if name == "":
        for k, v in kw.items() :
            print(f"{k} => {v}")
    else:
        if len(kw) == 0:
            print(f"Hello {name} You Have No Scores To Show")
        else :
            print(f"Hello {name} This Is Your Score Table:")
            for k, v in kw.items() :
                print(f"{k} => {v}")

# Test 1
get_the_scores("Osama", **scores_list)

# Output
# "Hello Osama This Is Your Score Table:"
# "Math => 90"
# "Science => 80"
# "Language => 70"

# Test 2
get_the_scores("Osama")

# Output
# "Hello Osama You Have No Scores To Show"

# Test 3
get_the_scores(**scores_list)

# Output
# "Math => 90"
# "Science => 80"
# "Language => 70"