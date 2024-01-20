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
  solDierCount.sort((a, b) => a.value - b.value)
  if (k === solDierCount.length) {
    return solDierCount.map((x) => x.index)
  }
  let i = 1
  const res = []
  while (k > 0) {
    console.log(i)
    if (solDierCount[i - 1].value <= solDierCount[i].value) {
      res.push(solDierCount[i - 1].index)
    }
    i++
    k--
  }
  return res
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
