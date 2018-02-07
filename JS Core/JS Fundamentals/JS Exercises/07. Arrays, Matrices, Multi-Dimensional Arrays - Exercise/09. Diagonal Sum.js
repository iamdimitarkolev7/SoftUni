function solve(input) {
    let matrix = [[]];
    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ').map(el => Number(el));
    }

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i <input.length; i++) {
        sum1 += matrix[i][i];
    }
    for (let i = 0; i < input.length; i++) {
        sum2 += matrix[i][input.length - 1 - i];
    }

    if (sum1 === sum2) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (!(i === j || i + j === input.length - 1)) {
                    matrix[i][j] = sum1;
                }
            }
        }
    }

    console.log(matrix.map(el => el.join(' ')).join('\n'));
}