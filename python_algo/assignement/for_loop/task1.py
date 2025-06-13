# Input
my_nums = [15, 81, 5, 17, 20, 21, 13]
i = 0
my_nums.sort(reverse=True)
for n in my_nums:
    if n % 5 == 0:
        i += 1
        print (f"{i} => {n}")
    else :
        continue
else :
    print("All Numbers Printed")
# Needed Output
# "1 => 20"
# "2 => 15"
# "3 => 5"
# "All Numbers Printed"