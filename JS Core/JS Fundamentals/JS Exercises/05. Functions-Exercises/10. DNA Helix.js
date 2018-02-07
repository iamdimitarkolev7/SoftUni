function solve(n) {
    let dnaHelix = 'ATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGGATCGTTAGGG';

    function printFirstRow(char1, char2) {
        console.log(`**${char1}${char2}**`);
    }
    function printSecondRow(char1, char2) {
        console.log(`*${char1}--${char2}*`);
    }
    function printThirdRow(char1, char2) {
        console.log(`${char1}----${char2}`);
    }

    let dnaCounter = 0;
    let number = 1;
    let k = 1;

    for (let i = 1; i <= n; i++) {
        let char1 = dnaHelix[dnaCounter];
        let char2 = dnaHelix[dnaCounter + 1];

        if (i === number || i === number + k * 4) {
            printFirstRow(char1, char2);

            if (i === number + k * 4) {
                k = k + 1;
            }
        } else if (i % 2 === 0) {
            printSecondRow(char1, char2);
        } else  {
            printThirdRow(char1, char2);
        }

        dnaCounter += 2;
    }
}