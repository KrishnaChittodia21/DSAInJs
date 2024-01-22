/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
// var allCellsDistOrder1 = function (rows, cols, rCenter, cCenter) {
//   const res = []
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       res.push([i, j])
//     }
//   }
//   res.sort(
//     (a, b) =>
//       Math.abs(a[0] - rCenter) +
//       Math.abs(a[1] - cCenter) -
//       Math.abs(b[0] - rCenter) -
//       Math.abs(b[1] - cCenter)
//   )
//   return res
// }

const allCellsDistOrder2 = (rows, cols, rCenter, cCenter) => {
  const res = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const dis = Math.abs(i - rCenter) + Math.abs(j - cCenter)
      res.push({ cords: [i, j], dis })
    }
  }
  res.sort((a, b) => a.dis - b.dis)
  return res.map((x) => x.cords)
}
