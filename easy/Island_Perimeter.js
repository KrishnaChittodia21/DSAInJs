/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue
      perimeter += 4
      if (grid[i + 1] && grid[i + 1][j] === 1) perimeter -= 1
      if (grid[i - 1] && grid[i - 1][j] === 1) perimeter -= 1
      if (grid[i] && grid[i][j + 1] === 1) perimeter -= 1
      if (grid[i] && grid[i][j - 1] === 1) perimeter -= 1
    }
  }
  return perimeter
}

// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// )

console.log(islandPerimeter([[1]]))
