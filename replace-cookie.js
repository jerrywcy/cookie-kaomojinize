/** @format */

// ==UserScript==
// @name         替换x岛饼干为颜文字符号
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将x岛的用户饼干根据对应关系替换为颜文字符号，如果你运气足够好说不定可以看到
// @author       You
// @match        https://www.nmbxd1.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codepen.io
// @grant        none
// ==/UserScript==
const dict = [
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
];

function id(c) {
    let id = c.charCodeAt(0);
    if (id >= 48 && id <= 57) {
        id = id - 48;
    } else if (id >= 65 && id <= 90) {
        id = id - 65 + 10;
    } else if (id >= 97 && id <= 122) {
        id = id - 97 + 36;
    } else {
        console.log(`${c} is not a number or a character!`);
        throw Error;
    }
    return id;
}

function generate(text) {
    let ret = "";
    for (let c of text) {
        try {
            ret += dict[id(c)];
        } catch (error) {
            console.log(`Error occured when handling cookie ${text}`);
            throw error;
        }
    }
    return ret;
}

function main() {
    const uids = document.getElementsByClassName("h-threads-info-uid");
    for (let uid of uids) {
        if (uid.textContent != null && uid.innerHTML == uid.textContent) {
            uid.textContent = `ID:${generate(uid.textContent.substring(3))}`;
        }
    }
}

(function () {
    "use strict";
    try {
        main();
    } catch (_error) {
        //Let's pretend nothing happens
    }
})();
