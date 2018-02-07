function solve(year) {
    "use strict";
    /*if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)) {
        console.log('yes');
    } else {
        console.log('no');
    }*/

    let leap = (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0));
    console.log(leap ? 'yes' : 'no');
}