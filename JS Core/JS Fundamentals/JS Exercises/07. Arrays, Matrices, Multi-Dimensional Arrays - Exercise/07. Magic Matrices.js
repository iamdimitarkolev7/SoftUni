function solve(matrix) {
    let sum = 0;
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        sum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }

        if (!result.includes(sum)) {
            result.push(sum);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        sum = 0;

        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[i][j];
        }

        if (!result.includes(sum)) {
            result.push(sum);
        }
    }

    if (result.length === 1) {
        console.log('true');
    } else {
        console.log('false');
    }
}