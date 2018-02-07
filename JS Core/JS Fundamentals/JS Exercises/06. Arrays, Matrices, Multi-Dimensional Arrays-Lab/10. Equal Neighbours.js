function solution (matrix = [[]]) {
    let br = 0;
    for(let i = 0;i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++){
            if(j===matrix[i].length-1&&i===matrix.length-1){

            }
            else if(j===matrix[i].length-1){
                if(matrix[i][j]===matrix[i+1][j]){
                    br++;
                }
            }
            else if(i===matrix.length-1){
                if(matrix[i][j]===matrix[i][j+1]){
                    br++;
                }
            }
            else{
                if(matrix[i][j]===matrix[i][j+1]){
                    br++;
                }
                if(matrix[i][j]===matrix[i+1][j]){
                    br++;
                }

            }
        }
    }
    console.log(br)
}