/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const n = grid.length
  let totalSurfaceArea = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = grid[i][j]

      // Calculate the surface area contribution of the current cube
      if (v > 0) {
        totalSurfaceArea += 4 * v + 2 // Top and bottom faces

        // Check adjacent cubes (up, down, left, right) and subtract overlapping areas
        if (i > 0) totalSurfaceArea -= 2 * Math.min(v, grid[i - 1][j]) // Up
        if (j > 0) totalSurfaceArea -= 2 * Math.min(v, grid[i][j - 1]) // Left
      }
    }
  }

  return totalSurfaceArea
}
