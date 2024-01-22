/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const res = []
  for (let i = 0; i + 2 < grid.length; i++) {
    const temp = []
    for (let j = 0; j + 2 < grid.length; j++) {
      let max = 0
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          max = Math.max(max, grid[i + m][j + n])
        }
      }
      temp.push(max)
    }
    res.push(temp)
  }
  return res
}

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
)
