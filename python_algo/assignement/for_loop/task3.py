# Input
my_ranks = {
  'Math': 'A',
  "Science": 'B',
  'Drawing': 'A',
  'Sports': 'C'
}

ranks_trad = {
    "A" : 100,
    "B" : 80,
    "C" : 40
}

for rank in my_ranks:
    print(f"My Rank in {rank} Is A And This Equal {ranks_trad[my_ranks[rank]]} Points")
# Needed Output
# "My Rank in Math Is A And This Equal 100 Points"
# "My Rank in Science Is B And This Equal 80 Points"
# "My Rank in Drawing Is A And This Equal 100 Points"
# "My Rank in Sports Is C And This Equal 40 Points"
# "Total Points Is 320"