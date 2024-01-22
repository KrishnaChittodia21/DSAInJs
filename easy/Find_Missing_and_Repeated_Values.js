/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const arr = grid.flat()
  arr.sort((a, b) => a - b)
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1
    } else {
      map[arr[i]] = map[arr[i]] + 1
    }
  }
  const res = []
  for (let i = 1; i <= arr.length; i++) {
    if (!map[i]) {
      res[1] = i
    } else if (map[i] === 2) {
      res[0] = i
    }
  }

  return res
}

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
)

console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
)
