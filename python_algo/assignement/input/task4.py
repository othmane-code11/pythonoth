email = input("Enter Your email : ").strip().lower()
print(f"Hello mr {email[:email.index("@")]}")
print(f"Email Service Provider Is {email[email.index("@")+1:email.index(".")]}")
print(f"Top level domaine Is {email[email.index(".")+1:]}")
