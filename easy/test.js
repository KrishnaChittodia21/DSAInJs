/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    const newRes = []
    for (let j = 0; j < matrix[0].length; j++) {
      newRes.push(matrix[j][i])
    }
    res.push(newRes)
  }
  return res
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
