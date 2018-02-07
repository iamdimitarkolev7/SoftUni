function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                sum1 += matrix[i][j];
            }
            if (i + j + 1 === matrix.length) {
                sum2 += matrix[i][j];
            }
        }
    }

    console.log(sum1 + ' ' + sum2);
}

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])