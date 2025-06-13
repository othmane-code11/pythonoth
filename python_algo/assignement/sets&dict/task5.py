dictt = {
    "HTML" : "90%",
    "CSS" : "87%",
    "Python" : "100%",
    "JS" : "99%"
}

print(f"HTML progress is {dictt["HTML"]}")
print(f"CSS progress is {dictt["CSS"]}")
print(f"JS progress is {dictt["JS"]}")
print(f"Python progress is {dictt["Python"]}")

dictt["ai"] = "89%"
print(f"{dictt.popitem()[0]} progress is {dictt.popitem()[1]}")