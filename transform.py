def id(x:str):
    ret=0
    if x.isdigit():
        ret=ord(x)-ord('0')
    elif x.isupper():
        ret=ord(x)-ord('A')+10
    elif x.islower():
        ret=ord(x)-ord('a')+36
    else:
        print(x+"is not a number or letter!")
        raise Exception
    return ret

dic=[
    "|",
    "(",
    "´",
    "Д",
    "∀",
    "ﾟ",
    "`",
    ")",
    ";",
    "'",
    "･",
    "ω",
    "=",
    "-",
    "ー",
    "つ",
    "д",
    "⊂",
    "≡",
    "o",
    "ﾉ",
    "*",
    "∇",
    "・",
    "_",
    "ゝ",
    "〃",
    "ε",
    "?",
    "!",
    "ヮ",
    "σ",
    "ノ",
    "╬",
    "Σ",
    "☉",
    "⊙",
    ">",
    "<",
    "T",
    "￣",
    "3",
    "@",
    "#",
    "~",
    "$",
    "%",
    "ヾ",
    "&",
    "ρ",
    "^",
    "｡",
    "◕",
    "ゥ",
    "π",
    "彡",
    "☆",
    "\u3000",
    "ᑒ",
    "ฅ",
    "ˇ",
    "¥",
]

cookie=input("Please input your cookie:")
ans=""
for ch in cookie:
    ans+=dic[id(ch)]
print(ans)
