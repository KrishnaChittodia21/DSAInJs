/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if ([...new Set(matrix[i])].length !== matrix.length) return false
  }
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = []
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i])
    }
    if ([...new Set(arr)].length !== matrix.length) return false
  }
  return true
}

console.log(
  checkValid([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ])
)
