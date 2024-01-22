/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  while (k > 0) {
    const res = []
    for (let i = grid.length - 1; i >= 0; i--) {
      res.push(grid[i].pop())
    }
    console.log(res)
    grid[0].unshift(res.shift())
    for (let i = 1; i < grid.length; i++) {
      grid[i].unshift(res.pop())
    }
    k--
  }
  return grid
}

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
)
