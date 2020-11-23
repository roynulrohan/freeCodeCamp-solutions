function rot13(str) {
    let deciphered = '';

    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        if (!str[i].match(/[^0-9a-z]/gi)) {
            // deciphers and shifts only alphanumeric characters
            deciphered += String.fromCharCode(
                ((str[i].charCodeAt() + 13 - 97) % 26) + 97
            );
        } else {
            deciphered += str[i];
        }
    }

    return deciphered.toUpperCase();
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
