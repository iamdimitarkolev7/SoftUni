function solve([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    let lDIPM = 0; // Last Day In Previous Month
    let previousMonth = month - 1;
    let leapYear = null;
    if (month === 1) {
        previousMonth = 12;
    }

    let result = (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? leapYear = true : leapYear = false;
    let days31 = (previousMonth === 1 || previousMonth === 3 || previousMonth === 5 || previousMonth === 7 || previousMonth === 8 || previousMonth === 10 || previousMonth === 12);
    let days30 = (previousMonth === 4 || previousMonth === 6 || previousMonth === 9 || previousMonth === 11);
    let days28 = (leapYear === false && previousMonth === 2);
    let days29 = (leapYear === true && previousMonth === 2);

    if (days31) {
        lDIPM = 31;
    } else if (days30) {
        lDIPM = 30;
    } else if (days28) {
        lDIPM = 28;
    } else if (days29) {
        lDIPM = 29;
    }

    console.log(lDIPM);
}

solve([1, 1, 2002]);
solve([13, 12, 2004]);