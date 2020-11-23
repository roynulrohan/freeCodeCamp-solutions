function checkCashRegister(price, cash, cid) {
    const amounts = [
        { name: 'ONE HUNDRED', val: 100 },
        { name: 'TWENTY', val: 20 },
        { name: 'TEN', val: 10 },
        { name: 'FIVE', val: 5 },
        { name: 'ONE', val: 1 },
        { name: 'QUARTER', val: 0.25 },
        { name: 'DIME', val: 0.1 },
        { name: 'NICKEL', val: 0.05 },
        { name: 'PENNY', val: 0.01 },
    ];

    let changeAmount = parseFloat((cash - price).toFixed(2)), // change due
        totalCid = 0, // total amount in cash register
        change = []; // change to return

    // calculate total amount in cash register
    for (let i of cid) {
        totalCid += i[1];
    }

    if (changeAmount > totalCid) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    } else if (changeAmount == totalCid) {
        return { status: 'CLOSED', change: cid };
    } else {
        cid = cid.reverse(); // reverse cash register

        // iterate through every currency starting from greatest
        for (let i = 0; i <= 8; i++) {
            let temp = 0; // amount in the single currency

            // check if change due is greater than current currencies value
            // then check if cash register has available currency
            while (
                changeAmount >= amounts[i].val &&
                cid[i][1] - amounts[i].val >= 0
            ) {
                // subtract currency value from change due
                changeAmount -= amounts[i].val;
                changeAmount = parseFloat(changeAmount.toFixed(2));

                // subtract currency value from currency in cash register
                cid[i][1] -= amounts[i].val;

                // add value to amount to be paid in current currency
                temp += amounts[i].val;
                temp = parseFloat(temp.toFixed(2));
            }

            // push currency and amount to change
            if (temp != 0) {
                change.push([cid[i][0], temp]);
            }
        }
    }

    // if change due is paid off then return open else insufficient
    return changeAmount == 0
        ? { status: 'OPEN', change: change }
        : { status: 'INSUFFICIENT_FUNDS', change: [] };
}

console.log('Case #1');
console.log(
    checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
    ])
);

console.log('Case #2');
console.log(
    checkCashRegister(19.5, 20, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
    ])
);

console.log('Case #3');
console.log(
    checkCashRegister(3.26, 100, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
    ])
);
