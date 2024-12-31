# Input
students = {
  "Ahmed": {
    "Math": "A",
    "Science": "D",
    "Draw": "B",
    "Sports": "C",
    "Thinking": "A"
  },
  "Sayed": {
    "Math": "B",
    "Science": "B",
    "Draw": "B",
    "Sports": "D",
    "Thinking": "A"
  },
  "Mahmoud": {
    "Math": "D",
    "Science": "A",
    "Draw": "A",
    "Sports": "B",
    "Thinking": "B"
 }
}
the_val = {
    'A' : '100',
    'B' : '80',
    'C' : '40',
    'D' : '20'
}

for name, modules in students.items():
    res = 0
    print('-----------------------------')
    print(f'-- Student name  => {name}')
    print('-----------------------------')
    for mod, val in modules.items() :
        print(f'- {mod} => {the_val[val]} points')
        res += int(the_val[val])
    print(f"total points for {name} is {res}")