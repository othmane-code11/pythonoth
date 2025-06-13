age = int(input("Enter your age : "))
if (age < 100 and age > 10) :
    months = age * 12
    weeks = months * 4
    days = weeks * 7
    hours = days * 24
    minutes = hours * 60
    seconds = minutes * 60
    print (f"Months : {months:,}")
    print (f"Weeks : {weeks:,}")
    print (f"Days : {days:,}")
    print (f"Hours : {hours:,}")
    print (f"Minutes : {minutes:,}")
    print (f"Seconds : {seconds:,}")