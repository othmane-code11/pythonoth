skills = ("HTML", "CSS", 10, "PHP", "Python", 20, "JavaScript")
skills_count = enumerate(reversed(skills), 50)
for k, v in skills_count:
    if (isinstance(v, str)):
        print(f"{k} - {v}")
# Output
# "50 - JavaScript"
# "52 - Python"
# "53 - PHP"
# "55 - CSS"
# "56 - HTML"