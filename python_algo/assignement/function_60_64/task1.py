def get_score(**kw) :
    for k, v in kw.items():
        print(f"{k} => {v}")
# Tests
get_score(Math=90, Science=80, Language=70)

# Tests
get_score(Logic=70, Problems=60)

