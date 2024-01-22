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
