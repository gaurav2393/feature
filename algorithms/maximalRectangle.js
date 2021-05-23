var maximalRectangle = function(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let finalSum = 0;
    let tempSum = 0;
    // let columnSum = [];
    let rowSum = [];
    // columnSum[0] = matrix[0];
    rowSum[0] = [];
    for(let i = 0 ; i < colLength ; i++) {
        if (matrix[0][i] > 0) {
            if(i>0) {
                rowSum[0][i] = +matrix[0][i-1] + 1;
                if (finalSum < rowSum[0][i]) {
                    finalSum = rowSum[0][i];
                }
            } else {
                rowSum[0][i] = 1;
                if (finalSum < rowSum[0][i]) {
                    finalSum = rowSum[0][i];
                }
            }
        } else {
            rowSum[0][i] = 0;
        }
    }
    for (let i = 1 ; i < rowLength ; i++) {
        // columnSum[i] = matrix[i];
        rowSum[i] = [];
        for (let j = 0 ; j < colLength ; j++) {
            tempSum = 0;
            let tempIndex = 2;
            let currentMin = 0;
            if (matrix[i][j]>0) {
                // columnSum[i][j] = +columnSum[i-1][j] + 1;
                // if (finalSum < columnSum[i][j]) {
                //     finalSum = columnSum[i][j];
                // }
                rowSum[i][j] = 1
                if(j>0 && rowSum[i][j-1] > 0) {
                    while (true) {
                        currentMin = Math.min(rowSum[i][j], rowSum[i][j-1]);
                    }
                } else {
                    rowSum[i][j] = 1;
                    if (finalSum < rowSum[i][j]) {
                        finalSum = rowSum[i][j];
                    }
                }
            } else {
                // columnSum[i][j] = 0;
                rowSum[i][j] = 0;
            }
        }
    }
    return finalSum;
};


var test1 = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
 z 
console.log(maximalRectangle(test1));
