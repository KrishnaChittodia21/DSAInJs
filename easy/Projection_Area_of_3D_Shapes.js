/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    let maxRow = 0,
      maxCol = 0
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) ans++
      maxRow = Math.max(maxRow, grid[i][j])
      maxCol = Math.max(maxCol, grid[j][i])
    }
    ans += maxRow + maxCol
  }
  return ans
}
