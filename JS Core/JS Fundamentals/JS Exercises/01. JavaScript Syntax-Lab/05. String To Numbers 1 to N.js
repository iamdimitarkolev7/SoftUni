function solve(arg) {
    "use strict";
    let concatString = '';
    for (let i = 1; i <= arg; i++) {
        concatString += i;
    }
    console.log(concatString);
}

solve(['11']);