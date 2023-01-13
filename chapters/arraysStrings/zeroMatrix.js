// Zero Matrix
// Write an algorithm such that if an element in a M x N grid is 0, its row and column also become 0.

function zeroMatrix(matrix){
  const M = matrix.length
  const N = matrix[0].length
  
  let cols = new Set()

  for(let i = 0; i < M; i++){
    for(let j = 0; j < N; j++){
      if(matrix[i][j] == 0){
        cols.add(j)
      }
    }
    if(matrix[i].includes(0)){
      matrix[i] = matrix[i].map(val => val = 0)
    }
  }

  for(i = 0; i < M; i++){
    for(let col of cols){
      matrix[i][col] = 0
    }
  }

  return matrix
}

console.log(zeroMatrix([[1,2,0],[4,5,6]]))
// 0 0 0
// 4 5 0