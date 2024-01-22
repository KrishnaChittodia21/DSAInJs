/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((nums) => nums.reverse().map((item) => (item ? 0 : 1)))
}
console.log([1, 2, 3].toString())
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
)
