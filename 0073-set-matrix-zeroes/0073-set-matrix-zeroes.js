/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let row = [];
    let col = [];

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(matrix[i][j] == 0){
                row.push(i);
                col.push(j);
            }
        }
    }

    for(let i=0; i<row.length; i++){
        let r = row[i];
        for(let j=0; j<cols; j++){
            matrix[r][j] = 0;
        }
    }

    for(let i=0; i<col.length; i++){
        let c = col[i];
        for(let j=0; j<rows; j++){
            matrix[j][c] = 0;
        }
    }
    return matrix;
};