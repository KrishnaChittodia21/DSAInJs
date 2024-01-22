/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc]
  if (oldColor === color) return image
  const queue = [[sr, sc]]
  while (queue.length) {
    const [x, y] = queue.shift()
    if (image[x][y] === oldColor) {
      image[x][y] = color
      if (x > 0) queue.push([x - 1, y])
      if (x < image.length - 1) queue.push([x + 1, y])
      if (y > 0) queue.push([x, y - 1])
      if (y < image[0].length - 1) queue.push([x, y + 1])
    }
  }
  return image
}

const fill = (image, sr, sc, color) => {
  if (
    sr >= image.length ||
    sr < 0 ||
    sc >= image[0].length ||
    sc < 0 ||
    image[sr][sc] === color ||
    image[sr][sc] === 0
  ) {
    return
  }

  image[sr][sc] = color
  fill(image, sr + 1, sc, color)
  fill(image, sr - 1, sc, color)
  fill(image, sr, sc + 1, color)
  fill(image, sr, sc - 1, color)
}

const floodFillRecursive = (image, sr, sc, color) => {
  if (image[sr][sc] === color) return image
  fill(image, sr, sc, color)
  return image
}

console.log(
  floodFillRecursive(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
)
