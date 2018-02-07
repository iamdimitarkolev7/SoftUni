function solve(matrix) {
    let max = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <= matrix.length; j++) {
            if (max < matrix[i][j]) {
                max = matrix[i][j];
            }
        }
    }

    console.log(max);
}
