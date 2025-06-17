from functools import reduce
nums = [2, 4, 6, 2]

print((reduce(lambda n, m : n * m, nums)))
# Output
# 96