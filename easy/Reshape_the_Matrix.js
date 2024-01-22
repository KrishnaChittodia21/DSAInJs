/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (r * c !== mat[0].length * mat.length) return mat
  const stk = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      stk.push(mat[i][j])
    }
  }
  const newMat = []
  for (let i = 0; i < r; i++) {
    const tempMat = []
    for (let j = 0; j < c; j++) {
      tempMat.push(stk.shift())
    }
    newMat.push(tempMat)
  }
  return newMat
}
