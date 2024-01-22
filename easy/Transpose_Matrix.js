/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const res = []
  for (let i = 0; i < matrix[0].length; i++) {
    const newRes = []
    for (let j = 0; j < matrix.length; j++) {
      newRes.push(matrix[j][i])
    }
    res.push(newRes)
  }
  return res
}
