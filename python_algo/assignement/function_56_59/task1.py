def calculate(num1, num2, op="add") :
    if (op.strip().lower() == "subtract" or op.strip().lower() == "s") :
        return num1 - num2
    elif (op.strip().lower() == "multiply" or op.strip().lower() == "m"):
        return num1 * num2
    elif (op.strip().lower() == "add" or op.strip().lower() == "a"):
        return num1 + num2
    else :
        return "Invalid operator!"

# Tests
print(calculate(10, 20)) # 30
print(calculate(10, 20, "AdD")) # 30
print(calculate(10, 20, "a")) # 30
print(calculate(10, 20, "A")) # 30

print(calculate(10, 20, "S")) # -10
print(calculate(10, 20, "subTRACT")) # -10

print(calculate(10, 20, "Multiply")) # 200
print(calculate(10, 20, "m")) # 200