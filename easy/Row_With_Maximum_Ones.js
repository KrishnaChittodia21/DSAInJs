/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let max = 0
  let row = 0
  for (let i = 0; i < mat.length; i++) {
    let count = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) count++
    }
    if (count > max) {
      max = count
      row = i
    }
  }
  return [row, max]
}

console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 1],
  ])
)
