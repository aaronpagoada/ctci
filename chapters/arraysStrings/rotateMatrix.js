// Rotate Matrix
// Given an N x N matrix, rotate the matrix 90 degrees clockwise.

function rotateMatrix(matrix){
  const N = matrix.length

  for(let i = 0; i < N / 2; i++){
    for(let j = i; j < N - i - 1; j++){
      let temp = matrix[i][j]
      matrix[i][j] = matrix[N - j - 1][i]
      matrix[N - j - 1][i] = matrix[N - i - 1][N - j - 1]
      matrix[N - i - 1][N - j - 1] = matrix[j][N - i - 1]
      matrix[j][N - i - 1] = temp
    }
  }

  return matrix
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))
// 7 4 1
// 8 5 2
// 9 6 3
console.log(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
// 13  9 5 1
// 14 10 6 2
// 15 11 7 3
// 16 12 8 4