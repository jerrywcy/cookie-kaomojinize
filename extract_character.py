s=input()
d={}
while s!="0":
    for ch in s:
        d[ch]=1
    s=input()
print(list(d.keys()))
