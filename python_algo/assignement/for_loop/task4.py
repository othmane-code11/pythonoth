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

All_ranks = {
    "A" : 100,
    "B" : 80,
    "C" : 40,
    "D" : 20
}

for name, ranks in students.items():
    print("-" * 40)
    print(f"-- Student Name => {name}")
    print("-" * 40)
    total = 0
    for rank in ranks:
        print (f"- {rank} => {All_ranks[ranks[rank]]} Points")
        total += int(All_ranks[ranks[rank]])
    print(f"Total rink for {name} is {total}")