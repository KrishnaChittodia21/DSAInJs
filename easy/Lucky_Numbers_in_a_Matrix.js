/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  const luckyNumbers = []

  for (let i = 0; i < m; i++) {
    let minInRow = Math.min(...matrix[i])
    let minIndex = matrix[i].indexOf(minInRow)

    let maxInCol = minInRow
    for (let j = 0; j < m; j++) {
      maxInCol = Math.max(maxInCol, matrix[j][minIndex])
    }

    if (minInRow === maxInCol) {
      luckyNumbers.push(minInRow)
    }
  }

  return luckyNumbers
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
)
