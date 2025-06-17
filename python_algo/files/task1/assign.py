import os

for i in range(50):
    with open(f"python_algo/files/task1/txt{i}.txt", "w") as file:
        file.write(f"Elzero Web School => {i}")

print (os.getcwd())
print(os.path.dirname(os.path.abspath(__file__)))
# task 2
with open(f"python_algo/files/task1/txt1.txt", "a") as file:
        file.write(f"\nElzero web school" * 50)

# task 3
with open(f"python_algo/files/task1/txt1.txt", "r") as f:
    lines = f.readlines()
    print(f"Number of lines is => {len(lines)}")
    count_words = 0
    count_L = 0
    count_chars = 0
    for line in lines:
        for word in line.split(' '):
            count_words += 1
            for chars in word:
                if (chars != " " and chars != "\n") :
                    count_chars += 1
                    if (chars == "l") :
                        count_L += 1
                    else :
                        continue
                else :
                    continue
            
    print (f"Number of words is => {count_words}")
    print (f"Number of chars is => {count_chars}")
    print (f"Number of L is => {count_L}")

j = 49
while j > 40:
    file = f"python_algo/files/task1/txt{j}.txt"
    if os.path.exists(file):
        os.remove(file)
        print(f"{file} delleted")
    j -= 1