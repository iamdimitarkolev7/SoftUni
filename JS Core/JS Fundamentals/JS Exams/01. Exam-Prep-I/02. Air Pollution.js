function solve(matrix, arr) {
    let mapOfSofia = [];
    let pollutions = [];
    let coordinates = '';

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i].split(' ')
            .filter((a) => a !== '');
        for (let j = 0; j < arr.length; j++) {
            arr[j] = Number(arr[j]);
        }

        mapOfSofia.push(arr);
    }

    for (let el of arr) {
        let tokens = el.split(' ').filter((a) => a !== '');

        let force = tokens[0];
        let index;
        let value;

        switch(force) {
            case 'breeze':
                index = Number(tokens[1]);

                for (let j = 0; j < matrix.length; j++) {
                    mapOfSofia[index][j] -= 15;
                    if (mapOfSofia[index][j] < 0) {
                        mapOfSofia[index][j] = 0;
                    }
                }

                break;
            case 'gale':
                index = Number(tokens[1]);

                for (let i = 0; i < matrix.length; i++) {
                    mapOfSofia[i][index] -= 20;
                    if (mapOfSofia[i][index] < 0) {
                        mapOfSofia[i][index] = 0;
                    }
                }

                break;

            case 'smog':
                value = Number(tokens[1]);

                for (let i = 0; i < mapOfSofia.length; i++) {
                    for (let j = 0; j < mapOfSofia.length; j++) {
                        mapOfSofia[i][j] += value;
                    }
                }
                break;
        }
    }

    for (let i = 0; i < mapOfSofia.length; i++) {
        for (let j = 0; j < mapOfSofia.length; j++) {
            if (mapOfSofia[i][j] >= 50) {
                coordinates = `[${i}-${j}]`;
                pollutions.push(coordinates);
            }
        }
    }

    if (pollutions.length === 0) {
        console.log('No polluted areas');
    } else {
        console.log('Polluted areas: ' + pollutions.join(', '));
    }
}

solve([ "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
],
["breeze 1", "gale 2", "smog 25"]);

