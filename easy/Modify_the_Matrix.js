/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const findMax = (matrix, currCol) => {
  let max = 0
  for (let i = 0; i < matrix.length; i++) {
    max = Math.max(max, matrix[i][currCol])
  }
  return max
}
var modifiedMatrix = function (matrix) {
  const answer = []
  for (let i = 0; i < matrix.length; i++) {
    const currMat = []
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) {
        const tt = findMax(matrix, j)
        currMat.push(tt)
      } else {
        currMat.push(matrix[i][j])
      }
    }
    answer.push(currMat)
  }
  return answer
}

var modifiedMatrixOptimized = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const maxColMatrix = new Array(col).fill(-Infinity)
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      maxColMatrix[i] = Math.max(maxColMatrix[i], matrix[j][i])
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = maxColMatrix[j]
      }
    }
  }
  return matrix
}

const matrix = [
  [2, -1, 2, -1, 2],
  [1, 0, -1, 2, -1],
  [2, -1, -1, -1, 2],
  [2, 1, 2, -1, 2],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, -1],
  [2, -1, 2, 2, 0],
  [0, 1, 0, 2, 2],
  [2, 2, 0, 1, -1],
]

console.log(modifiedMatrix(matrix))
