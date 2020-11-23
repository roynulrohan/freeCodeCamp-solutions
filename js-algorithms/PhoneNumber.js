function telephoneCheck(str) {
    // remove all whitespace
    str = str.replace(/\s/g, '');

    // check max and min length
    if (str.length > 15 || str.length < 10) {
        return false;
    }

    let numCount = 0,
        openBracketCount = 0,
        closedBracketCount = 0,
        dashCount = 0;

    for (var i = 0; i < str.length; i++) {
        // return if character doesn't match regex
        if (!str[i].match(/(\d|\-|\)|\()/m)) {
            return false;
        }

        // brackets and dashes counter
        if (str[i].match(/\d/m)) {
            numCount++;
        } else if (str[i].match(/\(/m)) {
            openBracketCount++;
        } else if (str[i].match(/\)/m)) {
            closedBracketCount++;
        } else if (str[i].match(/\-/m)) {
            dashCount++;
        }
    }

    // return if invalid number of brackets, dashes or numbers
    if (
        openBracketCount > 1 ||
        closedBracketCount > 1 ||
        !(dashCount >= 0 && dashCount <= 2) ||
        !(numCount == 10 || numCount == 11)
    ) {
        return false;
    } else if (
        (openBracketCount == 1 && closedBracketCount != 1) ||
        (openBracketCount != 1 && closedBracketCount == 1)
    ) {
        return false;
    }

    // if brackets exist then checks if they're in correct positions
    if (openBracketCount == 1) {
        if (
            !(str[0] == '(' || str[1] == '(') ||
            !(str[4] == ')' || str[5] == ')')
        ) {
            return false;
        }
    }

    // if country code if provided then checks for it to be 1
    if (numCount == 11) {
        if (str[0] != '1') {
            return false;
        }
    }

    return true;
}

console.log(telephoneCheck('1 (555) 555-5555'));
console.log(telephoneCheck('555-5555'));
console.log(telephoneCheck('123**&!!asdf#'));
console.log(telephoneCheck('1 456 789 4444'));
