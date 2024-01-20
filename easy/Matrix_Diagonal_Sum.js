/**
 * @param {number[][]} mat
 * @return {number}
 */
// var diagonalSum = function (mat) {
//   if (mat.length === 1) return mat[0][0]
//   if (mat.length % 2 === 1) {
//     let sum = 0;
//     for (let i = 0; i < mat.length; i++) {
//       res.push(mat[i][i])
//       res.push(mat[i][mat.length - 1 - i])
//       if (
//         mat[i][i] === mat[i][mat.length - 1 - i] &&
//         i === mat.length - 1 - i
//       ) {
//         res.pop()
//       }
//     }
//     return res.reduce((acc, cur) => acc + cur, 0)
//   } else {
//     const arr = []
//     for (let i = 0; i < mat.length; i++) {
//       arr.push(mat[i][i])
//       arr.push(mat[i][mat.length - 1 - i])
//     }
//     return arr.reduce((acc, cur) => acc + cur, 0)
//   }
// }

const diagonalSum = (mat) => {
  let sum = 0
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i]
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (i !== j && i + j === mat.length - 1) {
        sum += mat[i][j]
      }
    }
  }
  return sum
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
)

console.log(
  diagonalSum([
    [4, 6, 7],
    [2, 9, 4],
    [5, 5, 5],
  ])
)
