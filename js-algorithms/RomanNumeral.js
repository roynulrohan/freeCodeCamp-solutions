function convertToRoman(num) {
    let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let str = '';

    for (let i in roman) {
        let j = Math.floor(num / roman[i]);
        num -= j * roman[i];
        str += i.repeat(j);
    }

    return str;
}

console.log(convertToRoman(4));
console.log(convertToRoman(68));
console.log(convertToRoman(3999));
