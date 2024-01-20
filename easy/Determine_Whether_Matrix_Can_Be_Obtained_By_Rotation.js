/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */

const transPose = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      ;[mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
    }
  }
  return mat
}
const reverse = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    mat[i].reverse()
  }
  return mat
}
var findRotation = function (mat, target) {
  if (mat === target) return true
  let k = 4
  while (k > 0) {
    mat = reverse(transPose(mat))
    if (JSON.stringify(mat) === JSON.stringify(target)) return true
    k--
  }
  return false
}

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
)

console.log(
  findRotation(
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
)

console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
  )
)
