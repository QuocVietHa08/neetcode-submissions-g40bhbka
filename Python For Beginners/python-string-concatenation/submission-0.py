def concatenate(s1: str, s2: str) -> str:
    newString = s1 + s2
    if len(newString) > 10:
        return "Too long!"
    return newString




# do not modify below this line
print(concatenate("He", "llo"))
print(concatenate("Hello ", "world!"))
print(concatenate("Length", "of10"))
