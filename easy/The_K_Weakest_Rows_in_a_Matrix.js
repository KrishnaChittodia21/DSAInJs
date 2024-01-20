/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const solDierCount = []
  for (let i = 0; i < mat.length; i++) {
    const count = mat[i].filter((x) => x === 1).length
    solDierCount.push({
      index: i,
      value: count,
    })
  }
  solDierCount.sort((a, b) => {
    if (a.value !== b.value) return a.value - b.value
    return a.index - b.index
  })
  if (k === solDierCount.length) {
    return solDierCount.map((x) => x.index)
  }
  return solDierCount.slice(0, k).map((x) => x.index)
}

// console.log(
//   kWeakestRows(
//     [
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 0],
//       [1, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1],
//     ],
//     3
//   )
// )
// console.log(
//   kWeakestRows(
//     [
//       [1, 0, 0, 0],
//       [1, 1, 1, 1],
//       [1, 0, 0, 0],
//       [1, 0, 0, 0],
//     ],
//     2
//   )
// )

console.log(
  kWeakestRows(
    [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    4
  )
)
