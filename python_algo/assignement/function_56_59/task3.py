def show_skills(name, *skills):
    print(f"Hello {name} Your Skills Is" if len(skills) > 0 else f"Hello {name} You Have No Skills To Show")
    for skill in skills :
        print(f"- {skill}")
show_skills("Osama", "HTML", "CSS", "JS", "Python")
show_skills("Ahmed")