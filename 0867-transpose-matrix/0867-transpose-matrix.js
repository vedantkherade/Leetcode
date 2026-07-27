/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let transpose = [];
    for(let i=0; i<cols; i++){
        transpose[i] = [];

        for(let j=0; j<rows; j++){
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
};