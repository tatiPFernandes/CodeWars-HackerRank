//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
//For example, the square matrix  is shown below:
//
//1 2 3
//4 5 6
//9 8 9  

const diagonalDiference = (arr) =>{
    let leftDiaginal = 0;
    let rightDiagonal = 0;

    for(let i = 0; i < arr.length; i += 1){
        leftDiaginal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i]
    }


    return Math.abs(leftDiaginal - rightDiagonal)
}
console.log(diagonalDiference([[9,2,3,],[4,2,6],[7,8,9]]))