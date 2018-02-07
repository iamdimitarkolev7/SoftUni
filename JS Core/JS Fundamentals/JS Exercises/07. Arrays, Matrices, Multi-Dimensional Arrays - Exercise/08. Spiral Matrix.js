function solve(row, col) {
    let matrix = [[]];
    row = Number(row);
    col = Number(col);

    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            matrix[i][j] = 1;
        }
    }

    let number = 1;
    let startRow = 0;
    let endRow = row - 1;
    let startCol = 0;
    let endCol = col - 1;

    while(number !== row * col + 1) {

        for(let i = startCol;i <= endCol;i++){
            matrix[startRow][i]=number;

            number++;

        }
        for(let i = startRow + 1;i <= endRow;i++){
            matrix[i][endCol]=number;
            number++
        }

        for(let i = endCol - 1;i >= startRow;i--){
            matrix[endRow][i]=number;
            number++;
        }

        for(let i = endRow - 1;i >= startRow + 1;i--){
            matrix[i][startCol]=number;
            number++;
        }

        startRow++;
        startCol++;
        endCol--;
        endRow--;
    }

    console.log(matrix.map(el => el.join(' ')).join('\n'));
}

solve(4, 4);
console.log();
solve(2, 3);