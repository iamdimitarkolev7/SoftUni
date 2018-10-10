function solve(inputLines) {
    let arrWithCharNums = [];
    let arrWithAll = [];
    let arrWithNames = [];
    let length = 0;
    for (let line of inputLines) {
        arrWithAll = line.split(' ');
        //console.log(arrWithAll.length);
        let indexOfIt = arrWithAll.indexOf('32763');
        length = arrWithAll[indexOfIt + 2];
        //console.log(length);
        let startingIndexCount = indexOfIt + 4;
        arrWithCharNums = [];
        for (let i = startingIndexCount; i < Number(startingIndexCount) + Number(length); i++) {
            arrWithCharNums.push(arrWithAll[i]);
        }
        let name = '';
        for (let i = 0; i < arrWithCharNums.length; i++) {
            let res = String.fromCharCode(arrWithCharNums[i]);
            name += res;
        }
        arrWithNames.push(name);
        name = '';
    }

    console.log(arrWithNames.join('\n'));
}

solve([ '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);