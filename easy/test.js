/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const arr = [...new Set(nums)].sort((a, b) => a - b)
  if (arr.length === 1) return arr[0]
  if (arr.length === 2) return Math.max(arr[0], arr[1])
  return arr[arr.length - 3]
}

console.log(
  thirdMax([
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ])
)
