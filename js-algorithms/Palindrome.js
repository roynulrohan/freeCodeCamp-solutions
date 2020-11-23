function palindrome(str) {
    let newStr = str.replace(/[^0-9a-z]/gi, ''); // sets newStr to only alphanumeric characters of str

    // compares newStr to newStr reversed
    return (
        newStr.toLowerCase() ==
        newStr.split('').reverse().join('').toLowerCase()
    );
}

console.log(palindrome('eye'));
console.log(palindrome('not a palindrome'));
console.log(palindrome('0_0 (: /- :) 0-0'));
