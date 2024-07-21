const palindromes = function (str) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (![",", "?", ".", "!", " "].includes(str[i])) {
            str1 += str[i];
        }
    }
    for (let i = str.length-1; i >= 0; i--) {
        if (![",", "?", ".", "!", " "].includes(str[i])) {
            str2 += str[i];
        }
    }
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    } 
    return false
};

// Do not edit below this line
module.exports = palindromes;
