function solve(word, letter1) {
    "use strict";
    let count = 0;

    for (let letter2 of word) {
        if (letter2 === letter1) {
            count++;
        }
    }

    console.log(count);
}

solve('hello', 'l');