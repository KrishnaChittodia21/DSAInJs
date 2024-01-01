/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  let max = 0
  let index = 0
  for (let i = 0; i < grid.length; i++) {
    const currMax = grid[i].filter((item) => item === 1).length
    if (currMax > max) {
      index = i
      max = currMax
    }
  }
  return index
}

console.log(
  findChampion([
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ])
)

console.log(
  findChampion([
    [0, 1],
    [0, 0],
  ])
)
